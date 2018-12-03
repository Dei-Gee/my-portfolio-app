import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Header from './components/Header/Header';
import Home from './components/Body/Home';
import About from './components/Body/About';
import Portfolio from './components/Body/Portfolio';
import Contact from './components/Body/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  /*state = {
    loading : true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000); // simulates an async action, and hides the spinner
  }*/

  render() {
/*
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
*/
    return (
      
        <BrowserRouter>
          <div className="App">
            <div className="head">
              <Header />
            </div>
            <div className="body">
              
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>

            <div className="foot">
              <Footer />
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
