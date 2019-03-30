function postComments(state = [], action) {
    switch(action.type){
        case 'ADD_COMMENT':
        // return the new state with the new comment
        return [...state, {
            user:action.author,
            text: action.comment
        }];
        case 'REMOVE_COMMENT':
            // console.log('===removing a comment !!===');
            // we need to retun the new state with out the deleted comment 
            return [
                //from teh start to the one we want ot delete
                ...state.slice(0, action.i),
                //after the deleted one, to the end
                ...state.slice(action.i + 1)
            ]
            // return state;
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    // console.log('comment state', state, action);
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            //overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;