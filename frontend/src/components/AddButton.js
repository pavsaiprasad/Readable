import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AddButton extends Component {
    render() {
        return (
            <Link to="/add">Add</Link>
        );
    }
}

export default AddButton;
