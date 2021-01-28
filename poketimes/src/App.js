import React from 'react';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';
<<<<<<< HEAD
import Post from './Components/Post';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
=======
import {BrowserRouter, Route} from 'react-router-dom';
>>>>>>> 395631f2a4545a39b3c3b778a4347fb573b0b2ff

class App extends React.Component {
  render() {
    return (
      <BrowserRouter> 
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/:post_id' component={Post}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
