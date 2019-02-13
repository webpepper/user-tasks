import * as React from 'react';
import { IUser } from '../../models';
import { TaskList } from '..';
import { GreatIcon } from '../GreatIcon';
import { TaskStats } from '../TaskList/TaskStats';

export interface IUserViewProps {
  user: IUser;
  userIndex: number;
}

export const User: React.SFC<IUserViewProps> = (props) => {
  const { user, userIndex } = props;
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
    <div className="card my-4">
        <h4 className="card-header">
            {user.firstname} {user.lastname}, {user.age} {showIcon && <GreatIcon />}
        </h4>
        <div className="card-body">
            <TaskList tasks={tasks} userIndex={userIndex} />
        </div>
        <div className="card-footer">
          <TaskStats user={user} />
        </div>
    </div>
  );
};
