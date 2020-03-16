import ImageConstants from '../constants/ImageConstants';
import imageApi from '../api/ImageApi';

// ---------------------- Save --------------------------------------------------
const saveImageBegin = () => ({
    type: ImageConstants.SAVE_IMAGE_BEGIN,
});

const saveImageSuccess = (status) => ({
    type: ImageConstants.SAVE_IMAGE_SUCCESS,
    payload: status,
});

const saveImageError = (error) => ({
    type: ImageConstants.SAVE_IMAGE_ERROR,
    payload: error,
});

// ---------------------- Delete --------------------------------------------------
const deleteImageBegin = () => ({
    type: ImageConstants.DELETE_IMAGE_BEGIN,
});

const deleteImageSuccess = (status) => ({
    type: ImageConstants.DELETE_IMAGE_SUCCESS,
    payload: status,
});

const deleteImageError = (error) => ({
    type: ImageConstants.DELETE_IMAGE_ERROR,
    payload: error,
});

export const imageSaveActions = (image) => async (dispatch) => {
    dispatch(saveImageBegin());
    try {
        const response = await imageApi.saveImage(image);
        dispatch(saveImageSuccess(response.data));
    } catch (error) {
        dispatch(saveImageError(error.response.status));
    }
};

export const imageDeleteActions = (id) => async (dispatch) => {
    dispatch(deleteImageBegin());
    try {
        const response = await imageApi.deleteImage(id);
        dispatch(deleteImageSuccess(response.data));
    } catch (error) {
        dispatch(deleteImageError(error.response.status));
    }
};
