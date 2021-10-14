// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from './pages/Home';

import Landing from './pages/Landing';
import Bills from './pages/Bills';
import PayBills from './pages/PayBills';
import Login from "./pages/Login";
import Register from './pages/Register';

import Overview from "./pages/Dashboard/Overview";
import History from "./pages/Dashboard/History";
const App=() =>{
  return (
    <Router>
    {/* <ScrollToTop /> */}

    <div className="App">
   
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/landing" exact component={Landing}></Route>
      <Route path="/bills" exact component={Bills}></Route>
      <Route path="/bills/:id" exact component={PayBills}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/register" exact component={Register}></Route>
      <Route path="/dashboard/overview"  component={Overview}></Route>
          <Route path="/dashboard/history"  component={History}></Route>
      </Switch>
     
    </div>
  </Router>
  );
}

export default App;
