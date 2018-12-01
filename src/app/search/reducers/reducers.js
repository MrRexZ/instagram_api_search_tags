import {
    RECEIVE_TAG_COUNT_FAILURE,
    RECEIVE_TAG_COUNT_SUCCESS,
    REQUEST_AUTH_INSTA,
    REQUEST_TAG_COUNT,
    RESP_AUTH_INSTA_SUCCESS
} from "../actions/actions";


function tags(state, action) {
    switch (action.type) {
        case RECEIVE_TAG_COUNT_SUCCESS:
            return Object.assign({}, state, {
                tagName: action.tagName,
                tagCount: action.tagCount
            })
        default:
            return state
    }

}


export function searchByTags(state = {tagData: {}}, action) {
    switch (action.type) {
        case REQUEST_TAG_COUNT:
            return Object.assign({}, state, {
                isFetching: true,
                lastErrorTag: null
            })
        case RECEIVE_TAG_COUNT_SUCCESS:
            var data = state.tagData
            data[action.tagName] = tags(state[action.tagName], action)
            return Object.assign({}, state, {
                isFetching: false,
                tagData: data,
                lastErrorTag: null
            })
        case RECEIVE_TAG_COUNT_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                lastErrorTag: action.tagName
            })
        default:
            return state

    }
}

export function authInsta(state = {}, action) {
    switch (action.type) {
        case REQUEST_AUTH_INSTA:
            return Object.assign({}, state, {
                isFetchingInstaKey: true,
                instaAuthed: false
            })
        case RESP_AUTH_INSTA_SUCCESS:
            return Object.assign({}, state, {
                isFetchingInstaKey: false,
                instaAuthed: true
            })
        default:
            return state
    }
}

