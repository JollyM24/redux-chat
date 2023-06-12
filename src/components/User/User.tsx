import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrent } from '../../redux/users';

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
  const dispatch = useDispatch();

  return (
    <li
      className={styles.user}
      onClick={() => {
        dispatch(changeCurrent(user.id));
      }}>
      <img className={styles.avatar} src={user?.avatar} alt="avatar" />
      <span>{user.name}</span>
    </li>
  );
};
