import React from 'react';

import { UsersList } from './components/UsersList/UsersList';
import { MessagesList } from './components/MessagesList/MessagesList';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <UsersList className={styles.usersList} />
      <div className={styles.rightColumn}>
        <MessagesList className={styles.messagesList} />
        <p>SendMessage</p>
      </div>
    </div>
  );
}

export default App;
