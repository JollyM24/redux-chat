import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import classnames from 'classnames';
import styles from './Message.module.scss';

export interface IMessage {
  id: number;
  date: Date;
  text: string;
  authorId: number;
}

interface IMessageProps {
  message: IMessage;
}

export const Message: FC<IMessageProps> = ({ message }) => {
  const users = useSelector((store: RootState) => store.users.list);
  const user = users.find(({ id }) => id === message.authorId);

  const currentUser = useSelector((store: RootState) => store.users.current);

  return (
    <li
      className={classnames(styles.message, {
        [styles.currentUserMessage]: message.authorId === currentUser.id,
      })}>
      <img className={styles.image} src={user?.avatar} alt="author" />
      <span
        className={classnames(styles.text, {
          [styles.currentUserMessageText]: message.authorId === currentUser.id,
        })}>
        {message.text}
      </span>
    </li>
  );
};
