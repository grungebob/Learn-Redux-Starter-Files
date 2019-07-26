// A reducer takes in two things:
// 1. The Action (info about what happened)
// 2. A copy of the current state

// action (what happened), then the store
// OKay, let me see
// Then update the new state of the store

function posts(state = [], action) {
    // console.log('THE POST WILL CHANGE');
    // console.log('POSTS JS STATE: ', state, 'POSTS JS ACTION: ', action);
    // Reducer when we click on like, increment likes is what we need to act on
    // Switch statement is what allows us to act

    switch(action.type) {
        case 'INCREMENT_LIKES' :
            console.log('INCREMENTING LIKES!!');
            const i = action.index;
            return [
                ...state.slice(0, i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1), //after the one we are updating
            ]
            // return the updated state
            default: 
            return state;
    }
}

export default posts;

// Video 12:
// Redux - don't mutate state, use pure functions
// Takes a copy of the old state, returns a copy of the new state
// Old state shouldn't be mutated