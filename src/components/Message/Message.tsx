import { FC } from 'react';

export interface IMessage {
  id: number;
  text: string;
  date: Date;
  authorId: number;
}

interface IMessageProps {
  message: IMessage;
}

export const Message: FC<IMessageProps> = ({ message }) => {
  return <li></li>;
};

// className={`text ${message.authorId === currentUser.id ? 'currentUser' : ''}`}
