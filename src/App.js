import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Header from './pages/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/profile' component={Profile} />
      </div>
    </BrowserRouter>
  );
}

export default App;
