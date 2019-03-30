// A reducer takes in two things:
    // 1. The Action (info about what happened);
    // 2. Copy of current state


function posts(state = [], action) {
    // console.log('the post will change');
    // console.log(state, action);
    switch(action.type) {
        case 'INCREMENT_LIKES':
            console.log('incrementing likes');
            const i = action.index;
            return [
                ...state.slice(0, i), // before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1),
            ]

        // return the updated state
        default:
            return state;
    } 
    // return state;
}

export default posts;

