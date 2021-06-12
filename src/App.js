import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About-Page';
import Passwords from './components/pages/Passwords-Page';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Form from "./components/Form";
import GetPaswords from "./components/GetPasswords"
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
          <Route path='/sign-Up' component={SignUp} />
          <Route path='/login' component={Form} />
          <Route path='/get-passwords' component={GetPaswords} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
