import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch  } from 'react-router-dom'
import UnAuthRoutes from './containers/UnAuthedRoutes/UnAuthRoutes'
import AuthedRoutes from './containers/AuthedRoutes/AuthedRoutes'



class App extends Component {

  state = {
    info : ''
  }

  componentDidMount(){
    let info = this.props.state
  setTimeout(() => {
    this.setState({
      info
    })
  }, 1000);
}

  render() {
    let {info} = this.state
    console.log("info",info)
    return (
     <Router>
       <Switch>
         <UnAuthRoutes path='/login' {...info} />
         <UnAuthRoutes path='/signup' {...info} />
         <AuthedRoutes path='/' {...this.props} />
       </Switch>
     </Router>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    state : state
  }
}

export default connect(mapStateToProps,null)(App);
