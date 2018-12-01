import {combineReducers} from "redux";
import {authInsta, searchByTags} from "../../search/reducers/reducers";

const rootReducer = combineReducers({
    searchByTags,
    authInsta
})

export default rootReducer