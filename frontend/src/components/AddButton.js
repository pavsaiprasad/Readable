import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AddButton extends Component {
    render() {
        return (
            <div className="add-button">
                <Link className="btn btn-primary" to="/add">
                    <i className="fa fa-plus-circle"></i>
                </Link>
            </div>
        );
    }
}

export default AddButton;
