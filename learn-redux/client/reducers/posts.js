// A reducer takes in two things:
    // 1. The Action (info about what happened);
    // 2. Copy of current state


function posts(state = [], action) {
    console.log('the post will change');
    console.log(state, action);
    return state;
}

export default posts;

