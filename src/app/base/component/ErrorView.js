import React, {Component} from 'react'

export class ErrorView extends Component {
    render() {
        const errorMsg = this.props.errorMsg
        return (
            <div id="error-text">
                Error : {errorMsg}
            </div>
        )
    }
}