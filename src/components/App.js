import { connect } from 'react-redux';

import Main from './Main';

const mapStateToProps = state => {
    return {
        posts: state.posts,
        comments: state.comments
    }
};

const App = connect(
    mapStateToProps,
    null
)(Main);

export default App;
