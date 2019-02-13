import * as React from 'react';
import { IUser } from '../../models';
import { User } from './User';

export interface IUserListViewProps {
  users: IUser[];
}

export const UserList: React.SFC<IUserListViewProps> = props => (
  <>
    {props.users.map((user, index) =>
      <User user={user} key={index} userIndex={index} />
    )}
  </>
);
