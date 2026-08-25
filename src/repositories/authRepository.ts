import initialUsers from "../data/users.json";
import { storageService } from "../services/storageService";
import type {
  LoginCredentials,
  RegisterCredentials,
  User,
  UserRecord,
} from "../types/auth";


const SESSION_KEY = "app_session";


const USERS_KEY = "app_users";
const getUsers = () => storageService.get<UserRecord[]>(USERS_KEY) ?? (initialUsers as UserRecord[]);
const persistUsers = (value: UserRecord[]) => storageService.set(USERS_KEY, value);


export const authRepository = {
  login(credentials: LoginCredentials): User | null {
    const foundUser = getUsers().find(
      (user) =>
        user.carnet === credentials.carnet &&
        user.password === credentials.password
    );


    if (!foundUser || foundUser.active === false) {
      return null;
    }


    const sessionUser: User = {
      id: foundUser.id,
      name: foundUser.name,
      carnet: foundUser.carnet,
      role: foundUser.role,
    };


    storageService.set<User>(SESSION_KEY, sessionUser);


    return sessionUser;
  },

  register(credentials: RegisterCredentials): { user?: User; error?: string } {
    const users = getUsers();
    if (users.some((user) => user.carnet === credentials.carnet)) return { error: "Ya existe una cuenta registrada con este CI." };
    const record: UserRecord = { id: `user-${Date.now()}`, name: credentials.name, paternalSurname: credentials.paternalSurname, maternalSurname: credentials.maternalSurname, carnet: credentials.carnet, password: credentials.password, role: "USUARIO", active: true };
    persistUsers([...users, record]);
    const user: User = { id: record.id, name: record.name, carnet: record.carnet, role: record.role, paternalSurname: record.paternalSurname, maternalSurname: record.maternalSurname, active: record.active };
    storageService.set<User>(SESSION_KEY, user);
    return { user };
  },
  getUsers(): User[] { return getUsers().map((record) => ({ id: record.id, name: record.name, carnet: record.carnet, role: record.role, paternalSurname: record.paternalSurname, maternalSurname: record.maternalSurname, active: record.active })); },
  toggleUser(userId: string): void { persistUsers(getUsers().map((user) => user.id === userId ? { ...user, active: user.active === false } : user)); },


  logout(): void {
    storageService.remove(SESSION_KEY);
  },


  getCurrentUser(): User | null {
    return storageService.get<User>(SESSION_KEY);
  },


  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  },
};
