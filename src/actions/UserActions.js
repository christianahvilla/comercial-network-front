import userConstants from '../constants/UserConstants';
import userApi from '../api/UserApi';

// ---------------------- Update --------------------------------------------------
const updateUserBegin = () => ({
    type: userConstants.UPDATE_USER_BEGIN,
});

const updateUserSuccess = (user) => ({
    type: userConstants.UPDATE_USER_SUCCESS,
    payload: user,
});

const updateUserError = (error) => ({
    type: userConstants.UPDATE_USER_ERROR,
    payload: error,
});

// ---------------------- Fetch --------------------------------------------------
const fetchUserBegin = () => ({
    type: userConstants.FETCH_USER_BEGIN,
});

const fetchUserSuccess = (users) => ({
    type: userConstants.FETCH_USER_SUCCESS,
    payload: users,
});

const fetchUserError = (error) => ({
    type: userConstants.FETCH_USER_ERROR,
    payload: error,
});

// ---------------------- Save --------------------------------------------------
const saveUserBegin = () => ({
    type: userConstants.SAVE_USER_BEGIN,
});

const saveUserSuccess = (status) => ({
    type: userConstants.SAVE_USER_SUCCESS,
    payload: status,
});

const saveUserError = (error) => ({
    type: userConstants.SAVE_USER_ERROR,
    payload: error,
});

// ---------------------- Delete --------------------------------------------------
const deleteUserBegin = () => ({
    type: userConstants.DELETE_USER_BEGIN,
});

const deleteUserSuccess = (status) => ({
    type: userConstants.DELETE_USER_SUCCESS,
    payload: status,
});

const deleteUserError = (error) => ({
    type: userConstants.DELETE_USER_ERROR,
    payload: error,
});

export const userUpdateActions = (user, id) => async (dispatch) => {
    dispatch(updateUserBegin());
    try {
        const response = await userApi.updateUser(user, id);
        dispatch(updateUserSuccess(response.data));
    } catch (error) {
        dispatch(updateUserError(error.response.status));
    }
};

export const userFetchActions = () => async (dispatch) => {
    dispatch(fetchUserBegin());
    try {
        const response = await userApi.getUsers();
        dispatch(fetchUserSuccess(response.data));
    } catch (error) {
        dispatch(fetchUserError(error.response.status));
    }
};

export const userSaveActions = (user) => async (dispatch) => {
    dispatch(saveUserBegin());
    try {
        const response = await userApi.saveUser(user);
        dispatch(saveUserSuccess(response.data));
    } catch (error) {
        dispatch(saveUserError(error.response.status));
    }
};

export const userDeleteActions = (id) => async (dispatch) => {
    dispatch(deleteUserBegin());
    try {
        const response = await userApi.deleteUser(id);
        dispatch(deleteUserSuccess(response.data));
    } catch (error) {
        dispatch(deleteUserError(error.response.status));
    }
};
