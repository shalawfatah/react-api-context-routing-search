import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Posts from './components/Posts';
import PostSingle from './components/PostSingle';
import Users from './components/Users';
import UserSingle from './components/UserSingle';

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/users' exact>
          <Users />
        </Route>
        <Route path='/users/:name' exact>
          <UserSingle />
        </Route>
        <Route path='/posts' exact>
          <Posts />
        </Route>
        <Route path='/posts/:title' exact>
          <PostSingle />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
