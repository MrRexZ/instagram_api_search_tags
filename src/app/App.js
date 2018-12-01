import React, {Component} from 'react';
import './App.css';
import SearchTagForm from "./search/containers/SearchTagForm";
import TagsCountList from "./search/containers/TagsCountList";


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
