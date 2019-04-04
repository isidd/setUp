import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch  } from 'react-router-dom'



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
         {/* <UnAuthRoutes path='/login' {...info} />
         <UnAuthRoutes path='/signup' {...info} />
         <AuthedRoutes path='/' {...info} /> */}
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
