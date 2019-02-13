import * as React from 'react';
import { ITask, IUser } from '../../models';

export interface ITaskStatsProps {
  user: IUser;
}

export const TaskStats: React.SFC<ITaskStatsProps> = (props) => {
  const { user } = props;
  const tasks = user.tasks;

  const selectedTaskCount = tasks.filter(t => t.selected).length;
  const averageOfAll = tasks.reduce((acc, task) => acc + task.score, 0) / tasks.length;
  const showIcon = user.age < 30 && averageOfAll >= 4 || user.age >= 30 && averageOfAll > 4.33;

  let average;
  if (selectedTaskCount > 0) {
    average = tasks.filter(t => t.selected).reduce((acc, task) => acc + task.score, 0) / selectedTaskCount;
  } else {
    average = averageOfAll;
  }

  return (
    <>
      Average score of {selectedTaskCount > 0 ? `${selectedTaskCount} selected` : 'all'}
      &nbsp;
      {selectedTaskCount === 0 || selectedTaskCount > 1 ? 'tasks' : 'task'}:&nbsp;
      <span className="badge badge-pill badge-secondary">{average % 1 !== 0 ? average.toFixed(1) : average}</span>
    </>
  );
};
