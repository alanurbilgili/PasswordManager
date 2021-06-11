import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About-Page';
import Passwords from './components/pages/Passwords-Page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About-Page' component={About} />
          <Route path='/Passwords-Page' component={Passwords} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
