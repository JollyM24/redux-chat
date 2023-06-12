import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { RootState, useStoreDispatch } from '../../redux/store';
import { User } from '../User/User';

import styles from './UsersList.module.scss';
import { getUsers } from '../../redux/users';

interface IUserListProps {
  className?: string;
}

export const UsersList: FC<IUserListProps> = ({ className }) => {
  const dispatch = useStoreDispatch();
  const users = useSelector((state: RootState) => state.users.list);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={classnames(className, styles.userList)}>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
