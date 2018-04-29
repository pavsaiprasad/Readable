import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css';

class NavigationBar extends Component {
    render() {
        const { categories } = this.props;
        return (
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                {categories && categories.items && categories.items.map((category) =>
                    <li className="nav-item" key={category.name} >
                        <Link to={`/${category.path}`}>{category.name}</Link>
                    </li>
                )}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(NavigationBar);

