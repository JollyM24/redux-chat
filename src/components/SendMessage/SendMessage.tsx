import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { sendMessage } from '../../redux/messages';
import SendIcon from './assets/send.svg';
import classnames from 'classnames';
import styles from './SendMessage.module.scss';

interface ISendMessageProps {
  className?: string;
}

export const SendMessage: FC<ISendMessageProps> = ({ className }) => {
  const [text, textChange] = useState<string>('');

  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.users.current);

  return (
    <div className={classnames(className, styles.sendMessage)}>
      <img className={styles.avatar} src={currentUser.avatar} alt="author" />
      <div className={styles.form}>
        <input
          className={styles.input}
          value={text}
          onChange={({ target }) => textChange(target.value)}></input>
        <button
          className={styles.sendButton}
          onClick={() => {
            if (text) {
              dispatch(
                sendMessage({
                  text,
                  authorId: currentUser.id,
                }),
              );
              textChange('');
            }
          }}>
          <img src={SendIcon} alt="SendIcon" />
        </button>
      </div>
    </div>
  );
};
