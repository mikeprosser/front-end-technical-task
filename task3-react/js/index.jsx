import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route, Redirect} from 'react-router';

import PostList from './PostList'
import SinglePost from './SinglePost'

render(
    <Router history={browserHistory}>
        <Route path="/task3-react/" component={PostList}/>
        <Route path="/task3-react/:post_id" component={SinglePost}/>
        <Redirect from="/task3-react/" to="/task3-react/" />
    </Router>,
    document.getElementById("root")
);