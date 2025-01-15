export interface User {
  login: string;
}

export interface UserStore {
  user: User | null;
}
