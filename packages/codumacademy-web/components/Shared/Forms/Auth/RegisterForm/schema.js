import { string, object, ref } from "yup";

const schema = object().shape({
  fullName: string().required("Requerido!"),
  email: string()
    .email("Email invalido!")
    .required("Requerido!"),
  birtday: string().required("Requerido!"),
  password: string()
    .oneOf([ref("passwordConfirmation")], "Las contraseñas no coinciden")
    .required("Requerido!"),
  passwordConfirmation: string().required("Requerido!"),
  identityDoc: string().required("Requerido!"),
  typeIdentityDocId: string().required("Requerido!"),
  phone: string().required("Requerido!"),
  stateId: string().required("Requerido!"),
  cityId: string().required("Requerido!"),
  howDidYouFindUs: string().required("Requerido!"),
  howDidYouFindUsText: string(),
  university: string().required("Requerido!"),
  career: string().required("Requerido!"),
  semester: string().required("Requerido!"),
  other: string()
});

export default schema;
