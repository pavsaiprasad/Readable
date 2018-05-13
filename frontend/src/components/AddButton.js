import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AddButton extends Component {
    render() {
        return (
            <div className="add-button">
                
                <Link className="btn plus-circle" to="/post/add">
                    <span className="link-text">Add Post</span> 
                    <i className="fa fa-plus-circle"></i>
                </Link>
            </div>
        );
    }
}

export default AddButton;
