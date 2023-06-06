import { FC } from 'react';
import { useDispatch } from 'react-redux';

export interface IUser {
  id: number;
  name: string;
  avatar: string;
}

interface IUserProps {
  user: IUser;
}

export const User = () => {
  return (
    <div className="user">
      <div className="user__avatar">User Avatar</div>
      <div className="user__name">User Name</div>
    </div>
  );
};
