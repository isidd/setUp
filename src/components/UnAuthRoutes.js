import React , {Component} from 'react' ;
import MainRoutes from './MainRoutes'

class UnAuthRoutes extends Component {
    
    componentWillReceiveProps(nextProps){
        if(this.props !== nextProps.props){
            console.log("updating the states here")
        }

    }

    render(){
        if(isFetching) {
            return(
            "Loading..!"
        )
            }
        else{
            return(
                <MainRoutes {...this.props}/>
            )
        }
    }
} 
export default UnAuthRoutes ;