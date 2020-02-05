import authConstants from '../constants/AuthConstants';
import authApi from '../api/AuthApi';

// ---------------------- Login --------------------------------------------------
const loginBegin = () => ({
    type: authConstants.LOGIN_BEGIN,
});

const loginSuccess = (authentication) => ({
    type: authConstants.LOGIN_SUCCESS,
    payload: authentication,
});

const loginError = (error) => ({
    type: authConstants.LOGOUT_ERROR,
    payload: error,
});

// ---------------------- Logout --------------------------------------------------
const logoutBegin = () => ({
    type: authConstants.LOGOUT_BEGIN,
});

const logoutSuccess = () => ({
    type: authConstants.LOGOUT_SUCCESS,
});

const logoutError = (error) => ({
    type: authConstants.LOGOUT_ERROR,
    payload: error,
});

export const loginActions = (credentials) => async (dispatch) => {
    dispatch(loginBegin());
    try {
        const response = await authApi.login(credentials);
        const user = {
            token: response.data.access_token,
            name: response.data.name,
        };
        dispatch(loginSuccess(user));
    } catch (error) {
        dispatch(loginError(error.response.status));
    }
};

export const logoutActions = () => async (dispatch) => {
    dispatch(logoutBegin());
    try {
        const response = await authApi.logout();
        dispatch(logoutSuccess(response.data));
    } catch (error) {
        dispatch(logoutError(error.response.status));
    }
};
