import React, {Component} from 'react';
import './App.css';
import {TagsCountList} from "./search/components/TagsCountList";
import SearchTagForm from "./search/containers/SearchTagForm";


class App extends Component {
    render() {
        return (
            <div className="App">
                <SearchTagForm />
                <TagsCountList />
            </div>
        );
    }
}

export default App;
