function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            // Return the new state with the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            console.log('REMOVING A COMMENT');
            // we need to return the new state without the deleted comment:
            return [
                // From the start to the one we want to delete:
                ...state.slice(0, action.i),
                // After:
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            //take the current state
            ...state,
            //overwrite this post with a new one
            // BAF_KW4jJKLJKLJ : ['Wow', 'cool']

            [action.postId]: postComments(state[action.postId], action)

        }
    }
    console.log(state, action);
    return state;
}

export default comments;