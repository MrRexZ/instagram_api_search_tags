import React, {Component} from 'react';

export class TagsCountList extends Component {
    render() {
        const tagsCountMap = this.props.tagsCountMap.tagData
        var tagsArr = Object.values(tagsCountMap)
        console.log(tagsArr)
        return (
            <div>
                <h2>Table Tags Searched</h2>
                <table id="tags-count-table">
                    <tr>
                        <th>Tag Name</th>
                        <th>Tag Count</th>
                    </tr>
                    {tagsArr.map(tagObj => (
                        <tr>
                            <td>{tagObj["tagName"]}</td>
                            <td>{tagObj["tagCount"]}</td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}