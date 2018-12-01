import {
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
    }

}


export function searchByTags(state = {tagData: {}}, action) {
    switch (action.type) {
        case REQUEST_TAG_COUNT:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_TAG_COUNT_SUCCESS:
            var data = state.tagData
            data[action.tagName] = tags(state[action.tagName], action)
            return Object.assign({}, state, {
                isFetching: false,
                tagData: data
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

