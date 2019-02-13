import * as React from 'react';
import { ITask, IStoreState, ISelectTaskCallback, ISelectedTask } from '../../models';
import { connect } from 'react-redux';
import { TaskList as TaskListView } from './TaskList';
import { selectTask } from '../../store/Actions';

interface IOwnProps {
  tasks: ITask[];
  userIndex: number;
}

interface IDispatchProps {
  selectTask: (params: ISelectedTask) => ReduxActions.Action<ISelectedTask>;
}

const TaskListComponent: React.SFC<IOwnProps & IDispatchProps> = (props) => {
  const { tasks, selectTask, userIndex } = props;

  if (tasks.length === 0) {
    return null;
  }

  return <TaskListView {...{ tasks, selectTask, userIndex }} />;
};

export const TaskList = connect<{}, IDispatchProps, IOwnProps, IStoreState>(
    null,
    dispatch => ({
      selectTask: params => dispatch(selectTask(params))
    })
)(TaskListComponent);
