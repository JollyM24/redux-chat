import { FC } from 'react';
import classnames from 'classnames';

import { User } from '../User/User';

import styles from './UsersList.module.scss';

interface IUserListProps {
  className?: string;
}

export const UsersList: FC<IUserListProps> = ({ className }) => {
  return (
    <div className={classnames(className, styles.userList)}>
      {/* <User />
      <User />
      <User /> */}
    </div>
  );
};
