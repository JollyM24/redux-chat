import React from 'react';

import { UsersList } from './components/UsersList/UsersList';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <UsersList className={styles.usersList} />
      <div className={styles.rightColumn}>
        <p>MessagesList</p>
        <p>SendMessage</p>
      </div>
    </div>
  );
}

export default App;
