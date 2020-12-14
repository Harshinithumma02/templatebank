import React from 'react';

// import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/landingpage/landingpage';
//import SignupPage from './components/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Header />
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
         {/* <Route path="/signup" component={SignupPage}></Route> */}
        </Switch>
      </React.Fragment>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
