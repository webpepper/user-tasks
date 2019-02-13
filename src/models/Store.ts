import { IUser } from './User';

export interface IStoreState {
  users: IUser[];
}

export interface ISelectedTask {
  userIndex: number;
  taskIndex: number;
}
