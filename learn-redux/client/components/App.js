import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';


//These function surface our data and our functions
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// Two functions that take the state and dispatch
// and surface the data and functions via props
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
