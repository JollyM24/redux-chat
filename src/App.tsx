import React from 'react';

import { UsersList } from './components/UsersList/UsersList';
import { MessagesList } from './components/MessagesList/MessagesList';
import { SendMessage } from './components/SendMessage/SendMessage';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <UsersList className={styles.usersList} />
      <div className={styles.rightColumn}>
        <MessagesList className={styles.messagesList} />
        <SendMessage />
      </div>
    </div>
  );
}

export default App;
