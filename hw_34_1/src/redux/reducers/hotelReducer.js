const initialState = {
    list: [],
};

export const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HOTELS':
            return { ...state, list: action.payload };
        default:
            return state;
    }
};

export default hotelReducer;