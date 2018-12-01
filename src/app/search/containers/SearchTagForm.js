import {connect} from "react-redux";
import {SearchForm} from "../components/SearchForm";
import {fetchTagCount} from "../actions/actions";
import {INSTA_ACCESS_TOKEN} from "../constants/config";


const mapDispatchToProps = (dispatch) => {
    return {
        onTriggerSearch: (tagName) => {
            dispatch(fetchTagCount(tagName, INSTA_ACCESS_TOKEN))
        }
    }
}



export default connect(null, mapDispatchToProps)(SearchForm)