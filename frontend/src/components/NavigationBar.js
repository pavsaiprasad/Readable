import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css';
import AddButton from '../components/AddButton';


class NavigationBar extends Component {
    render() {
        const { categories } = this.props;
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><strong>Readable</strong></Link>
                            </li>
                            {categories && categories.items && categories.items.map((category) =>
                                <li className="nav-item" key={category.name}>
                                    <Link className="nav-link" to={`/${category.path}`}>{category.name}</Link>
                                </li>
                            )}
                        </ul>
                        <AddButton />
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(NavigationBar);

