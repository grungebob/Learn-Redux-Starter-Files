// A reducer takes in two things:
// 1. The Action (info about what happened)
// 2. A copy of the current state

// action (what happened), then the store
// OKay, let me see
// Then update the new state of the store

function posts(state = [], action) {
    console.log(state, action);
    return state;
}

export default posts;