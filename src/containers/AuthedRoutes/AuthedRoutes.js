import React , { Component } from 'react' 
import { Route } from 'react-router-dom'
import AllRouteContainer from './AllRoutes/AllRouteContainer'

class AuthedRoutes extends Component {
    state = {
        info : '',
        isFetching : false
    }

componentDidMount(){
    let info = this.props
    setTimeout(() => {
        this.setState({info,isFetching:info.state.userInfo.isFetching})
    }, 1000);
}
    render(){
        console.log("sidd",this.state.info)
        return (
            <React.Fragment>
                {this.state.isFetching ? <Route path="/" render={(props)=><AllRouteContainer {...props} />} /> : "Loading..."
}            </React.Fragment>
        )
    }
}
export default AuthedRoutes 