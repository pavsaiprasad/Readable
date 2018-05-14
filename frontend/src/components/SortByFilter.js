import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../actions'

class SortByFilter extends Component {
    onChangeFilter(e) {
        this.props.changeFilter(e.target.value);
    }
    render() {
        const { sortByList } = this.props;
        return (
            <div className="container sortByList">
            <div className="col-md-4 col-md-offset-8 ">
                <select id="sortBy" name="sortBy"
                    onChange={(e) => { this.onChangeFilter(e) }}>
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
        changeFilter: (selectedOption) => dispatch(changeFilter(selectedOption))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortByFilter)
