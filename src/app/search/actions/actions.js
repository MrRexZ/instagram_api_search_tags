import fetch from 'cross-fetch'

export const REQUEST_AUTH_INSTA = 'REQUEST_AUTH_INSTA'
export const RESP_AUTH_INSTA_SUCCESS = 'RESP_AUTH_INSTA_SUCCESS'
export const REQUEST_TAG_COUNT = 'REQUEST_TAG_COUNT'
export const RECEIVE_TAG_COUNT_SUCCESS = 'RECEIVE_TAG_COUNT_SUCCESS'


function requestAuthInsta(clientId) {
    return {
        type: REQUEST_AUTH_INSTA,
        instaClientId : clientId
    }
}

function respondAuthInstaSuccess(instaAccessToken) {
    return {
        type: RESP_AUTH_INSTA_SUCCESS,
        instaAccessToken: instaAccessToken
    }
}

function requestTagCount(tagName) {
    return {
        type: REQUEST_TAG_COUNT,
        tagName: tagName
    }
}

function receiveTagCountSuccess(jsonData) {
    return {
        type: RECEIVE_TAG_COUNT_SUCCESS,
        tagName: jsonData.data.name,
        tagCount : jsonData.data.media_count
    }
}

export function fetchTagCount(tagName, accessToken) {
    return dispatch => {
        dispatch(requestTagCount(tagName))
        return fetch(`https://api.instagram.com/v1/tags/${tagName}?access_token=${accessToken}`)
            .then(response => response.json())
            .then(json => dispatch(receiveTagCountSuccess(json)))
    }
}