import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { IUser } from './IUser';

interface IUserProps {
  user: IUser;
}

export const User: FC<IUserProps> = ({ user }) => {
  return (
    <li>
      <img />
      <span></span>
    </li>
  );
};
