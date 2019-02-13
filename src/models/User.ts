import { ITask } from './Task';

export interface IUser {
  firstname: string;
  lastname: string;
  age: number;
  tasks: ITask[];
}
