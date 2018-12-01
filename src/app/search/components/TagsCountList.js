import React, {Component} from 'react';

export class TagsCountList extends Component {
    render() {
        const tagsCountMap = this.props.tagsCountMap.tagData
        var tagsArr = Object.values(tagsCountMap)
        console.log(tagsArr)
        return (
            <div>
                <ul>
                    {tagsArr.map(tagObj => (
                        <li>{tagObj["tagName"]} - {tagObj["tagCount"]}</li>
                    ))}
                </ul>
            </div>
        )
    }
}