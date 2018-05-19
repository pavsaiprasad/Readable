import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as action from '../actions'

class Error404 extends Component{
    componentDidMount() {
        this.props.displayErrorPage(true);
    }
    render(){
        return(
            <div className='container'>
                <h1>The page you were looking for was not found</h1>
                <p>Sorry but the page you are looking for has not been found.</p>
                <p>You could try clicking on one of the menu items if you want go back to home page </p>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        displayErrorPage: (displayErrorPage) => dispatch(action.displayError(displayErrorPage))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Error404)