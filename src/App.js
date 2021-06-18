import React from 'react';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';


const App = () => {
  return (
    <>
    <Router>
    <NavMenu/>
    <Switch>
   <Route path="/about"><About/></Route>
   <Route path="/projects"><Projects/></Route>
   <Route path="/contact"><Contact/></Route>
   <Route path="/"><Home/></Route>
    
    </Switch>
    </Router>
     
    </>
  );
}


export default App;