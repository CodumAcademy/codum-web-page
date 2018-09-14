// import cookies from "js-cookie";

export default class persist {
  static get ACCESS_TOKEN_KEY() {
    return "accessToken";
  }

  static async willGetAccessToken() {
    if (process.browser) return localStorage[persist.ACCESS_TOKEN_KEY];
    // return cookies.get(persist.ACCESS_TOKEN_KEY);
    return null;
  }

  static async willSetAccessToken(value) {
    if (process.browser) localStorage[persist.ACCESS_TOKEN_KEY] = value;
    // return cookies.set(persist.ACCESS_TOKEN_KEY, value);
    return null;
  }

  static async willRemoveAccessToken() {
    delete localStorage[persist.ACCESS_TOKEN_KEY];
    // cookies.remove(persist.ACCESS_TOKEN_KEY);
  }
}
