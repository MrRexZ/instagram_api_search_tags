import {TagsCountList} from "../components/TagsCountList";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        tagsCountMap : state.searchByTags
    }
}

export default connect(mapStateToProps, null)(TagsCountList)