export const initialState = {
    user: null,
    currentRoomId: null,
    isOpenSidebar: false,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_CURRENT_ROOM_ID':
            return {
                ...state,
                currentRoomId: action.currentRoomId,
            };
        case 'SET_IS_OPEN_SIDEBAR':
            return {
                ...state,
                isOpenSidebar: action.isOpenSidebar,
            };
        default:
            return state;
    }
};

export default reducer;
