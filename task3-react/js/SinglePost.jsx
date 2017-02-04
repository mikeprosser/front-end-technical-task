import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

var SinglePost = React.createClass({
    getInitialState: function() {
        return {
            post: {},
            comments: []
        }
    },
    componentDidMount: function() {
        var _this = this;
        axios
            .get("https://jsonplaceholder.typicode.com/posts/" + _this.props.params.post_id)
            .then(function(result) {
                _this.setState({
                    post: result.data
                })
            })
        axios
            .get("https://jsonplaceholder.typicode.com/posts/" + _this.props.params.post_id + "/comments")
            .then(function(result) {
                _this.setState({
                    comments: result.data
                })
            })
    },
    render: function() {
        return (
            <div>
                <Link to={"/task3-react/"}>back</Link>
                <h3>{this.state.post.title}</h3>
                    <p>{this.state.post.body}</p>
                    <hr />
                    <div>
                        Comments
                        <hr />
                        {this.state.comments.map(function(comment) {
                            return <div key={comment.id}>
                                <h5>{comment.name}</h5>
                                <p>{comment.body}</p>
                                <p> - {comment.email}</p>
                                <br />
                            </div>
                        })}
                    </div>
            </div>
        )
    }
});

export default SinglePost;