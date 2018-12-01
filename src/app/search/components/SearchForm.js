import React, {Component} from 'react'
import {ErrorView} from "../../base/component/ErrorView";
import {LoadingView} from "../../base/component/LoadingView";

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
        const {lastErrorTag, isFetching} = this.props
        var errMsg = ""
        if (lastErrorTag != null) {
            errMsg = "Failed fetching tag "+ lastErrorTag + " from server"
        }
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
                {isFetching === true && <LoadingView />}
                {lastErrorTag != null && <ErrorView errorMsg={errMsg} />}
            </div>
        )
    }


}
