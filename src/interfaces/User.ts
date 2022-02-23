export interface IUser {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface IUserWithId {
  id: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface IUserToken {
  id: number,
  username: string,
}

export interface IUserLogin {
  username: string,
  password: string,
}

export interface IUserLoginWithId {
  id: number,
  username: string,
  password: string,
}