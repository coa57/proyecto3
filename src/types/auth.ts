export type UserRole = "ADMIN" | "USUARIO";


export interface User {
  id: string;
  name: string;
  carnet: string;
  role: UserRole;
  paternalSurname?: string;
  maternalSurname?: string;
  active?: boolean;
}


export interface UserRecord extends User {
  password: string;
}


export interface LoginCredentials {
  carnet: string;
  password: string;
}

export interface RegisterCredentials { name: string; paternalSurname: string; maternalSurname: string; carnet: string; password: string; }
