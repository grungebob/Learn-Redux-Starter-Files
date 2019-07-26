import React from 'react';
import Photo from './Photo';
import Comments from './Comments'

const Single = React.createClass({
    render() {
        const { postId } = this.props.params
        // Need index of the post
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
        console.log('INDEX OF THE POST: ', i)
        // Get us the post
        const post = this.props.post[i];
        console.log('POST ', post);
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                 <Photo i={i} post = {post} {...this.props}/>
                 <Comments postComments={postComments} {...this.props}/>
            </div>
        )
    }
});

export default Single;
