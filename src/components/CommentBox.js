import React, { Component } from 'react';

class CommentBox extends Component {
    state = { comment: ''};

    handleChange = event => {
        this.setState({ comment: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();

        // todo Call an action creator
        // And save the comment
        this.setState({comment: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4> Add a Comment
                <textarea onChange={this.handleChange} value= {this.state.comment} />
                <div>
                <button> Submit
                </button>
                </div>
                </h4>
            </form>
        )
    }
}
export default CommentBox;
