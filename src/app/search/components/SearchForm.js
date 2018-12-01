import React, {Component} from 'react'
import {fetchTagCount} from "../actions/actions";
import {INSTA_ACCESS_TOKEN} from "../constants/config";
import {connect} from "react-redux";

export class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInputText: ''
        }
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
    }

    handleSearchTextChange(event) {
        this.setState({searchInputText: event.target.value})
    }

    render() {

        return (
            <div>
                <h1>Instagram API Tags Counter</h1>
                <p>Enter tag to display the count for : </p>
                <input id="searchInput" type="text" value={this.state.searchInputText}
                       onChange={this.handleSearchTextChange}/>
                <br/>
                <br/>
                <input id="search-submit-button" type="button" value="Search tag"
                       onClick={() => this.props.onTriggerSearch(this.state.searchInputText)}/>
            </div>
        )
    }


}
