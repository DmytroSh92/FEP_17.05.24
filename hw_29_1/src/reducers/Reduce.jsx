const initialState = {
    swapiData: null,
    loading: false,
    error: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SWAPI_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SWAPI_SUCCESS':
            return { ...state, loading: false, swapiData: action.payload };
        case 'FETCH_SWAPI_FAILURE':
            return { ...state, loading: false, error: action.error };
        case 'CLEAR_TODOS':
            return { ...state, swapiData: null };
        default:
            return state;
    }
};

export default rootReducer;