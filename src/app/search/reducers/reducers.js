import {RECEIVE_TAG_COUNT_SUCCESS, REQUEST_TAG_COUNT} from "../actions/actions";
import {combineReducers} from "redux";


function tags(state, action) {
    switch (action.type) {
        case RECEIVE_TAG_COUNT_SUCCESS:
            return Object.assign({}, state, {
                tagCount: action.tagCount
            })
    }

}

function searchByTags(state= {} , action) {
    switch (action.type) {
        case REQUEST_TAG_COUNT:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_TAG_COUNT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                [action.tagName]: tags(state[action.tagName], action)
            })
        default:
            return state

    }
}

const rootReducer = combineReducers({
    searchByTags
})

export default rootReducer