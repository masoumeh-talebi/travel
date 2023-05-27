import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/page/Home';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Tourism from './components/page/Tourism';
import Tour from './components/page/Tour';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/tourism" exact component={Tourism}/>
        <Route path="/tour" exact component={Tour}/>
      </Switch>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
