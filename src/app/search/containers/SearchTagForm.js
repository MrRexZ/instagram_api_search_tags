import {connect} from "react-redux";
import {SearchForm} from "../components/SearchForm";
import {fetchTagCount} from "../actions/actions";
import {INSTA_ACCESS_TOKEN} from "../../../config/config";


const mapDispatchToProps = (dispatch) => {
    return {
        onTriggerSearch: (tagName) => {
            dispatch(fetchTagCount(tagName, INSTA_ACCESS_TOKEN))
        }
    }
}


const mapStateToProps = (state) => {
    return {
        lastErrorTag : state.searchByTags.lastErrorTag,
        isFetching : state.searchByTags.isFetching
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)