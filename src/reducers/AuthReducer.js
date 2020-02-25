import authConstants from '../constants/AuthConstants';

const INITIAL_STATE = {
    authenticated: null,
    error: '',
    loading: false,
    status: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case authConstants.LOGIN_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case authConstants.LOGIN_SUCCESS:
        localStorage.setItem('access_token', action.payload.token);
        localStorage.setItem('user_name', action.payload.name);
        return { ...state, authenticated: action.payload, loading: false };

    case authConstants.LOGIN_ERROR:
        return { ...state, error: action.payload, loading: false };

    case authConstants.LOGOUT_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case authConstants.LOGOUT_SUCCESS:
        localStorage.removeItem('access_token');
        localStorage.removeItem('reloaded');
        localStorage.removeItem('name');
        return {
            ...state,
            loading: false,
            authenticated: null,
        };

    case authConstants.LOGOUT_ERROR:
        return { ...state, loading: false, error: action.payload };

    default:
        return state;
    }
};

export default authReducer;
