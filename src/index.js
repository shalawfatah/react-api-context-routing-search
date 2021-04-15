import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PostContext } from './store/PostContext';
import { UserContext } from './store/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <PostContext>
      <UserContext>
        <App />
      </UserContext>
    </PostContext>
  </React.StrictMode>,
  document.getElementById('root')
)