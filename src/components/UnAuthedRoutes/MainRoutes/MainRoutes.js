import React , { Component } from 'react'
import { Route } from 'react-router-dom'
import LoginContainer from './UnAuthContainers/LoginContainer'
import SignUpContainer from './UnAuthContainers/SignUpContainer'

class MainRoutes extends Component {


    render(){
        return (
            <React.Fragment>
            <Route path = "/login" render = {(props)=> <LoginContainer {...props} />} />
            <Route path = "/signup" render = {(props)=> <SignUpContainer {...props} />} />
            </React.Fragment>
        )
    }
}

export default MainRoutes