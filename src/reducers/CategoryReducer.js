import categoryConstants from '../constants/CategoryConstants';

const INITIAL_STATE = {
    categories: [],
    error: '',
    loading: false,
    status: null,
};

const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case categoryConstants.UPDATE_CATEGORY_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case categoryConstants.UPDATE_CATEGORY_SUCCESS:
        return { ...state, loading: false };

    case categoryConstants.UPDATE_CATEGORY_ERROR:
        return { ...state, error: action.payload, loading: false };

    case categoryConstants.FETCH_CATEGORY_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case categoryConstants.FETCH_CATEGORY_SUCCESS:
        return { ...state, loading: false, categories: action.payload };

    case categoryConstants.FETCH_CATEGORY_ERROR:
        return { ...state, loading: false, error: action.payload };

    case categoryConstants.SAVE_CATEGORY_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case categoryConstants.SAVE_CATEGORY_SUCCESS:
        return { ...state, status: action.payload, loading: false };

    case categoryConstants.SAVE_CATEGORY_ERROR:
        return { ...state, error: action.payload, loading: false };

    case categoryConstants.DELETE_CATEGORY_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case categoryConstants.DELETE_CATEGORY_SUCCESS:
        return { ...state, status: action.payload, loading: false };

    case categoryConstants.DELETE_CATEGORY_ERROR:
        return { ...state, error: action.payload, loading: false };

    default:
        return state;
    }
};

export default categoryReducer;
