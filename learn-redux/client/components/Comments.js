import React from 'react';


const Comments = React.createClass({
    renderComment(comment, i) {
        // console.log(comment);
        return (
            <div className="comment" key = {i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}> &times; </button>
                </p>
            </div>
        )
    },
    handleSubmit(e){
        e.preventDefault();
        // console.log('Sumbitting the form');
        // console.log(this.refs);
        const { postId } = this.props.params;
        const user = this.refs.author.value;
        const comment = this.refs.comment.value;
        // console.log(postId, user, comment, 'yeah!!!');
        this.props.addComment(postId, user, comment);
        this.refs.commentForm.reset();

    },
    render () {
        return (
        <div className="comment">
            {/* I'm the comment section bwoy! */}
            {this.props.postComments.map(this.renderComment)}
            <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="author" placeholder="user"/>
                <input type = "text" ref="comment" placeholder="comment" />
                <input type="submit" hidden />
            </form>
        </div>
        )
    }  
});

export default Comments; 