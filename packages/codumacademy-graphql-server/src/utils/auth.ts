import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken-refresh";

const tokenExpireTime = "2h";

class AuthError extends Error {
  constructor() {
    super("Not authorized");
  }
}

const sign = userId => {
  const oldToken = jwt.decode(jwt.sign({ userId }, process.env.APP_SECRET));
  const token = jwt.refresh(oldToken, tokenExpireTime, process.env.APP_SECRET);
  return token;
};

export function getUserId(ctx) {
  const Authorization = ctx.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const userId = jwt.verify(token, process.env.APP_SECRET)["userId"];
    return {
      id: userId,
      token
    };
  }

  throw new AuthError();
}

export const signup = async (parent, args, ctx, info) => {
  try {
    const { User } = ctx.db.models;
    const userData = args.user;
    const password = await bcrypt.hash(userData.password, 10);
    const user = await User.create({
      ...userData,
      password
    });

    user.password = null;

    const token = sign(user.id);
    return {
      token,
      user
    };
  } catch (e) {
    console.log(e);
  }
};

export const login = async (parent, { email, password }, ctx, info) => {
  const msg = "Email o contraseña incorrectos";
  const { User } = ctx.db.models;
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error(msg);

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) throw new Error(msg);

  user.password = null;

  const token = sign(user.id);

  return {
    token,
    user
  };
};

export const checkToken = async ctx => {
  const { id } = getUserId(ctx);
  const { User } = ctx.db.models;
  const user = await User.findOne({ where: { id } });
  if (!user) throw new AuthError();

  user.password = null;

  const token = sign(id);

  return (user && token) || null;
};

export const verify = async ctx => {
  const { id } = getUserId(ctx);
  const { User } = ctx.db.models;
  const user = await User.findOne({ where: { id } });
  if (!user) throw new AuthError();

  user.password = null;

  const token = sign(id);

  return {
    user,
    token
  };
};

export const authProtection = async (resolve, parent, args, ctx, info) => {
  const isValid = await checkToken(ctx);

  if (isValid) return resolve();

  throw new AuthError();
};
