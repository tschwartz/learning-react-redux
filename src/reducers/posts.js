const posts = (state = [], action) => {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const { postId } = action;

            return [
                ...state.slice(0, postId),
                {...state[postId], likes: state[postId].likes + 1},
                ...state.slice(postId + 1)
            ];
        default:
            return state;
    }
}

export default posts;
