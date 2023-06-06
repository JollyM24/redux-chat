import React from 'react';

import { UsersList } from './components/UsersList';

import './scss/app.scss';

function App() {
  return (
    <div className="app">
      <UsersList />
      <div className="chatWrapper">
        <p>MessagesList</p>
        <p>SendMessage</p>
      </div>
    </div>
  );
}

export default App;
