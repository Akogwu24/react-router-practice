import { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { NotFound } from './pages/404';
import About from './pages/About';
import Header from './pages/Header';
import Home from './pages/Home';
import Post from './pages/Post';
import Profile from './pages/Profile';

function App() {
  const [login, setLogin] = useState();
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <button onClick={() => setLogin(!login)}>
          {login ? 'logout' : 'login'}
        </button>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/profile'>
            {login ? <Profile /> : <Redirect to='/' />}
          </Route>
          <Route path='/post/:id' component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
