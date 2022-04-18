export interface IUser {
  username: string;
  password: string;
}

export class User {
  username: string;
  password: string;
  constructor(data: IUser) {
    this.username = data.username;
    this.password = data.password;
  }
}

export class UserPayload {
  currentUser: any;
  jwt: string;
  refreshToken: string;

  constructor(user: any, jwt: string, refreshToken: string) {
    this.currentUser = user;
    this.jwt = jwt;
    this.refreshToken = refreshToken;
  }
}
