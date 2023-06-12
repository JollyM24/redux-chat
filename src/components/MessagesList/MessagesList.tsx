import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useStoreDispatch } from '../../redux/store';

import { Message, IMessage } from '../Message/Message';
import { getMessages } from '../../redux/messages';

import classnames from 'classnames';
import styles from './MessagesList.module.scss';

interface IMessagesListProps {
  className?: string;
}

export const MessagesList: FC<IMessagesListProps> = ({ className }) => {
  const dispatch = useStoreDispatch();
  const messages = useSelector((state: RootState) => state.messages.list);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <ul className={classnames(className, styles.messagesList)}>
      {messages.map((message: IMessage) => (
        <Message key={message.id} message={message} />
      ))}
    </ul>
  );
};
