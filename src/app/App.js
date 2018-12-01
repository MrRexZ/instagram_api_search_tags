import React, {Component} from 'react';
import './App.css';
import {SearchForm} from "./search/components/SearchForm";
import {TagsCountList} from "./search/components/TagsCountList";


class App extends Component {
    render() {
        return (
            <div className="App">
                <SearchForm />
                <TagsCountList />
            </div>
        );
    }
}

export default App;
