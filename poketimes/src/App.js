import React from 'react';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter> 
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Home}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/about' component={About}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
