import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { NotFound } from './pages/404';
import About from './pages/About';
import Header from './pages/Header';
import Home from './pages/Home';
import Post from './pages/Post';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter basename='/basename_akogwu'>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/profile' component={Profile} />
          <Route path='/post/:id' component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
