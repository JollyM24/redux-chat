import { FC } from 'react';
import { useDispatch } from 'react-redux';

import styles from './User.module.scss';

export interface IUser {
  id: number;
  name: string;
  avatar: string;
}

interface IUserProps {
  user: IUser;
}

export const User: FC<IUserProps> = ({ user }) => {
  return (
    <div className={styles.user}>
      <img className={styles.avatar} src={user?.avatar} alt="avatar" />
      <div>{user.name}</div>
    </div>
  );
};
