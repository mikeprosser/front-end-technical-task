import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

var PostList = React.createClass({
    getInitialState: function() {
        return {
            posts: []
        }
    },
    componentDidMount: function() {
        var _this = this;
        this.serverRequest =
            axios
                .get("https://jsonplaceholder.typicode.com/posts")
                .then(function(result) {
                    _this.setState({
                        posts: result.data
                    })
                })
    },
    render: function() {
        return (
            <div>
                {this.state.posts.map(function(post) {
                    return <div key={post.id}>
                        <Link to={"/task3-react/" + post.id}>{post.title}</Link>
                        <hr/>
                    </div>
                })}
            </div>
        )
    }
});

export default PostList;