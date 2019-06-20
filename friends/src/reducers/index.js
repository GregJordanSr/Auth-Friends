
const initialState = {
    friends: [],
    updating: true,
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATING:
            return { ...state, updating: true, error: state.error};
            default:
                return state;
    }
}