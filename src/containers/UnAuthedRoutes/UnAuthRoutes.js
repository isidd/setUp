import React , {Component} from 'react' ;
import MainRoutes from './MainRoutes/MainRoutes'

class UnAuthRoutes extends Component {
    
    componentWillReceiveProps(nextProps){
        if(this.props !== nextProps.props){
            console.log("updating the states here")
        }

    }

    render(){
        if(this.props.isFetching) {
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