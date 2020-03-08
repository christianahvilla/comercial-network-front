import userConstants from '../constants/UserConstants';

const INITIAL_STATE = {
    users: [],
    error: '',
    loading: false,
    status: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case userConstants.UPDATE_USER_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case userConstants.UPDATE_USER_SUCCESS:
        return {
            ...state,
            users: state.users.map((item) => {
                return item.id === action.payload.id ? action.payload : item;
            }),
            loading: false,
        };

    case userConstants.UPDATE_USER_ERROR:
        return { ...state, error: action.payload, loading: false };

    case userConstants.FETCH_USER_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case userConstants.FETCH_USER_SUCCESS:
        return { ...state, loading: false, users: action.payload };

    case userConstants.FETCH_USER_ERROR:
        return { ...state, loading: false, error: action.payload };

    case userConstants.SAVE_USER_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case userConstants.SAVE_USER_SUCCESS:
        return {
            ...state,
            users: state.users.concat(action.payload).sort((a, b) => (a.user > b.user ? 1 : -1)),
            loading: false,
        };

    case userConstants.SAVE_USER_ERROR:
        return { ...state, error: action.payload, loading: false };

    case userConstants.DELETE_USER_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case userConstants.DELETE_USER_SUCCESS:
        return {
            ...state,
            users: state.users.filter((item) => item.id !== action.payload.id),
            loading: false,
        };

    case userConstants.DELETE_USER_ERROR:
        return { ...state, error: action.payload, loading: false };

    default:
        return state;
    }
};

export default userReducer;
