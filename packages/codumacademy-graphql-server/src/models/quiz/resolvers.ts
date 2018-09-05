import { getUserId } from "../../utils/auth";

export const generateQuestionsOrGetQuiz = async (_, args, ctx) => {
  const { id } = await getUserId(ctx);

  const { Quiz } = ctx.db.models;

  if(!id)
    return null;

  // buscar quiz y obtener # de preguntas máximo
  const quiz = await Quiz.findById(args.quizId);

  if (quiz) {
    const { QuizQuestion, QuizUserQuestion, QuizUserSummary, UserConvocationRequirement } = ctx.db.models;

    // verificar si no se han asignado preguntas al usuario para este quiz
    const questionsAssigned = await QuizUserQuestion.find({
      where: {
        "$quizQuestion.quizId$": quiz.id,
        userId: id
      },
      include: [{
          model: QuizQuestion,
          as: 'quizQuestion'
      }]
    });

    // Crear resumen quiz
    const quizSummary = await QuizUserSummary.findOrCreate({
      where: { userId: id, quizId: quiz.id },
      defaults: { userId: id, quizId: quiz.id }
    });

    if (questionsAssigned) return quiz;


    const query = {
      where: {
        quizId: quiz.id
      }
    };
    // Si no es una encuesta entonces buscar aleatoriamente el # de preguntas maximo que se asignó al quiz
    if (!quiz.isPoll) {
      Object.assign(query, {
        limit: quiz.answersNumber,
        order: [
          ctx.db.fn("rand"),
        ]
      });
    }

    // Asignar requirement al user
    const convocationRequirement = await UserConvocationRequirement.findOrCreate({
      where: {
        userId: id,
        convocationRequirementId: quiz.convocationRequirementId
      },
      defaults: {
        completed: false,
        userId: id,
        convocationRequirementId: quiz.convocationRequirementId
      }
    })

    const quizQuestions = await QuizQuestion.findAll(query);

    const mapQuestions = quizQuestions.map(item => ({
      userId: id,
      quizQuestionId: item.id,
      resolved: false,
      quizId: quiz.id
    }));

    //Asignar preguntas al usuario
    const quizUserQuestions = await QuizUserQuestion.bulkCreate(mapQuestions);

    return quiz;
  }

  return null;

}

export const getQuestion = async (_, args, ctx) => {
  const { id } = await getUserId(ctx);
  if(!id)
    return null;

  const { QuizUserQuestion } = ctx.db.models;

  const conditions = {
    userId: id,
    quizId: args.quizId
  };

  const quizUserQuestion = await QuizUserQuestion.find({
    where: {
      resolved: false,
      ...conditions
    },
    limit: 1
  });

  if (quizUserQuestion) {
      const { QuizQuestion } = ctx.db.models;
      const total = await QuizUserQuestion.count({
        where: conditions
      });

      const resolved = await QuizUserQuestion.count({
        where: {
          resolved: true,
          ...conditions
        }
      });

      const question = await QuizQuestion.findById(quizUserQuestion.quizQuestionId);

      return {
        total,
        resolved,
        question
      }
  }

  return {
    total: 0,
    resolved: 0,
    question: null
  }
}

export const setAnswer = async (_, { data }, ctx) => {
  const { id } = await getUserId(ctx);
  if(!id)
    return null;

  let question;
  let summary = null;
  let convocationRequirement = null;
  let requiredApprove = false;

  const { UserConvocationRequirement, QuizUserAnswer, QuizUserQuestion, QuizUserSummary, QuizQuestion, Quiz, QuizAnswer, ConvocationRequirement } = ctx.db.models;

  const conditions = {
    userId: id,
    quizId: data.quizId
  };

  // registrar la respuesta del usuario
  const userAnswer = await QuizUserAnswer.create({
    ...data,
    quizAnswerId: data.quizAnswerId === 0 ? null : data.quizAnswerId,
    userId: id
  });

  // Buscar otra pregunta sin resolver para devolverla al cliente
  const quizUserQuestion = await QuizUserQuestion.find({
    where: {
      resolved: false,
      ...conditions
    },
    limit: 1
  });

  // Si existen preguntas sin resolver entonces asignar el detalle de la pregunta
  if (quizUserQuestion)
      question = await QuizQuestion.findById(quizUserQuestion.quizQuestionId);

  // Si no es una encuesta entonces incrementar respuesta correcta o incorrecta
  const quiz = await Quiz.findById(data.quizId);
  if (!quiz.isPoll) {
      const successAnswer = await QuizAnswer.findById(data.quizAnswerId);
      if (successAnswer.isSuccessAnswer) {
        await QuizUserSummary.increment("successAnswers", {
          where: conditions
        });
      }
      else {
        await QuizUserSummary.increment("failedAnswers", {
          where: conditions
        });
      }
  }

  // Total preguntas asignadas
  const total = await QuizUserQuestion.count({
    where: conditions
  });

  // Total preguntas resueltas
  const resolved = await QuizUserQuestion.count({
    where: {
      resolved: true,
      ...conditions
    }
  });

  // Si ha respondido todas las preguntas
  if (total > 0 && resolved > 0 && resolved === total) {
    // Obtener el resumen
    const quizSummary = await QuizUserSummary.find({
      where: {
        ...conditions
      }
    });

    summary = await quizSummary.updateAttributes({ finished: true, totalAnswers: total });

    const cRequirement = await UserConvocationRequirement.find({
      where: {
        userId: id,
        convocationRequirementId: quiz.convocationRequirementId
      }
    });

    convocationRequirement = await cRequirement.updateAttributes({ completed: true });

    const conRequirement = await ConvocationRequirement.findById(quiz.convocationRequirementId);
    requiredApprove = conRequirement.requiredApprove;
  }

  return {
    total,
    resolved,
    question,
    summary,
    convocationRequirement,
    requiredApprove
  }

}
