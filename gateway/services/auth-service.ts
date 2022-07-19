class AuthService {
  static login(credentials: any) {
    console.log(credentials);
    return new Promise((resolve) => resolve("test token"));
  }

  static create(name: any, login: any, password: any) {
    console.log(name, login, password);
  }

  static async verify(token: any) {
    await Promise.resolve();
    console.log(token);

    return 20;
  }
}

export default AuthService;
