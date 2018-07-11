const postComment = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ];
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

const comments = (state = [], action) => {
    if (typeof action.postId === 'undefined') {
        return state;
    }

    return {
        ...state,
        [action.postId]: postComment(state[action.postId], action)
    };
}

export default comments;
