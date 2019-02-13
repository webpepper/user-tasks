import * as React from 'react';
import styledComponents from 'styled-components';
import { ITask, ISelectTaskCallback } from '../../models';

export interface ITaskViewProps {
  task: ITask;
  selectTask: ISelectTaskCallback;
  userIndex: number;
  taskIndex: number;
}

const ClickableListItem = styledComponents.li`
    cursor: pointer;
`;

export const Task: React.SFC<ITaskViewProps> = (props) => {
  const { task, selectTask, userIndex, taskIndex } = props;

  const taskClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    selectTask({ userIndex, taskIndex });
  };

  const isTaskSelected = !!task.selected;

  const liCssClass = `list-group-item list-group-item-action${isTaskSelected ? ' list-group-item-warning' : ''}`;

  return (
    <ClickableListItem className={liCssClass} onClick={taskClick}>
        <div className="row align-items-center">
            <div className="col-1 text-center align-middle  align-items-center">
                <input type="checkbox" checked={isTaskSelected} onChange={() => {}} />
            </div>
            <div className="col-10">
                <div><strong>{task.title}</strong></div>
                <p>{task.description}</p>
            </div>
            <div className="col-1 alight-right">
            <span className="badge badge-pill badge-info" title="Task score">{task.score}</span>
            </div>
        </div>
    </ClickableListItem>
  );
};
