import React from 'react'
import './assets/style/style.css'
import LandingPage from './pages/landingPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from './pages/projects';


export default class App extends React.Component{

  render(){
    return(
        
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/portofolio" component={Projects} />
        </Switch>
      </Router>

        // <Example/>
      
    )
  }
}
