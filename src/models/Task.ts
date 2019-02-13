import { ISelectedTask } from '.';

export interface ITask {
  title: string;
  description: string;
  score: number;
  selected?: boolean;
}

export type ISelectTaskCallback = (params: ISelectedTask) => ReduxActions.Action<ISelectedTask>;
