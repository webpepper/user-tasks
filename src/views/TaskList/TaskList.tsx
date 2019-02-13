import * as React from 'react';
import { ITask, ISelectTaskCallback } from '../../models';
import { Task } from './Task';

export interface ITaskListViewProps {
  tasks: ITask[];
  selectTask: ISelectTaskCallback;
  userIndex: number;
}

export const TaskList: React.SFC<ITaskListViewProps> = (props) => {
  const { tasks, selectTask, userIndex } = props;

  if (tasks.length === 0) {
    return null;
  }

  return (
    <ul className="list-group list-group-flush">
        {tasks.map((task, index) =>
          <Task {...{ task, selectTask, userIndex }} taskIndex={index} key={index} />
        )}
    </ul>
  );
};
