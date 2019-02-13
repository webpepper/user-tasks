import * as React from 'react';
import { connect } from 'react-redux';
import { UserList as UserListView } from './UserList';
import { IUser, IStoreState } from '../../models';

interface IStateToProps {
  users: IUser[];
}

const UserListComponent: React.SFC<IStateToProps> = props => <UserListView users={props.users} />;

export const UserList = connect<IStateToProps, {}, {}, IStoreState>(
  ({ users }) => ({ users })
)(UserListComponent);
