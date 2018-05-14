import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../actions'

class SortByFilter extends Component {
    onChangeSortBy(e) {
        this.props.changeSortBy(e.target.value);
    }
    render() {
        const { sortByList } = this.props;
        return (
            <div className="container sortByList">
                <div className="col-md-4 col-md-offset-8 ">
                    <select id="sortBy" name="sortBy"
                        onChange={(e) => { this.onChangeSortBy(e) }}>
                        {sortByList && sortByList.items && (
                            sortByList.items.map((item) => (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >{item.value}</option>
                            ))
                        )}
                    </select>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        sortByList: state.sortByList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeSortBy: (selectedOption) => dispatch(action.changeSortBy(selectedOption))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortByFilter)
