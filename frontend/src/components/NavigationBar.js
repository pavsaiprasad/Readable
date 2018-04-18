import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css';

class NavigationBar extends Component {
    render() {
        const { categories } = this.props;
        return (
            <ul>
                <li><a href="default.asp">Home</a></li>
                {categories.map((category) =>
                    <li className="nav-list-item" key={category.name}>
                        <Link to={`/${category.path}`}>{category.name}</Link>
                    </li>
                )}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categoriesReducer
    }
}

export default connect(mapStateToProps)(NavigationBar);

