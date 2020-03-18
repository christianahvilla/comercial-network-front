import categoryConstants from '../constants/CategoryConstants';
import categoryApi from '../api/CategoryApi';

// ---------------------- Update --------------------------------------------------
const updateCategoryBegin = () => ({
    type: categoryConstants.UPDATE_CATEGORY_BEGIN,
});

const updateCategorySuccess = (category) => ({
    type: categoryConstants.UPDATE_CATEGORY_SUCCESS,
    payload: category,
});

const updateCategoryError = (error) => ({
    type: categoryConstants.UPDATE_CATEGORY_ERROR,
    payload: error,
});

// ---------------------- Fetch --------------------------------------------------
const fetchCategoryBegin = () => ({
    type: categoryConstants.FETCH_CATEGORY_BEGIN,
});

const fetchCategorySuccess = (categories) => ({
    type: categoryConstants.FETCH_CATEGORY_SUCCESS,
    payload: categories,
});

const fetchCategoryError = (error) => ({
    type: categoryConstants.FETCH_CATEGORY_ERROR,
    payload: error,
});

// ---------------------- Save --------------------------------------------------
const saveCategoryBegin = () => ({
    type: categoryConstants.SAVE_CATEGORY_BEGIN,
});

const saveCategorySuccess = (status) => ({
    type: categoryConstants.SAVE_CATEGORY_SUCCESS,
    payload: status,
});

const saveCategoryError = (error) => ({
    type: categoryConstants.SAVE_CATEGORY_ERROR,
    payload: error,
});

// ---------------------- Delete --------------------------------------------------
const deleteCategoryBegin = () => ({
    type: categoryConstants.DELETE_CATEGORY_BEGIN,
});

const deleteCategorySuccess = (status) => ({
    type: categoryConstants.DELETE_CATEGORY_SUCCESS,
    payload: status,
});

const deleteCategoryError = (error) => ({
    type: categoryConstants.DELETE_CATEGORY_ERROR,
    payload: error,
});

export const categoryUpdateActions = (category, id) => async (dispatch) => {
    dispatch(updateCategoryBegin());
    try {
        const response = await categoryApi.updateCategory(category, id);
        dispatch(updateCategorySuccess(response.data));
    } catch (error) {
        dispatch(updateCategoryError(error.stack));
    }
};

export const categoryFetchActions = () => async (dispatch) => {
    dispatch(fetchCategoryBegin());
    try {
        const response = await categoryApi.getCategories();
        dispatch(fetchCategorySuccess(response.data));
    } catch (error) {
        dispatch(fetchCategoryError(error.stack));
    }
};

export const categorySaveActions = (category) => async (dispatch) => {
    dispatch(saveCategoryBegin());
    try {
        const response = await categoryApi.saveCategory(category);
        dispatch(saveCategorySuccess(response.data));
    } catch (error) {
        dispatch(saveCategoryError(error.stack));
    }
};

export const categoryDeleteActions = (id) => async (dispatch) => {
    dispatch(deleteCategoryBegin());
    try {
        const response = await categoryApi.deleteCategory(id);
        dispatch(deleteCategorySuccess(response.data));
    } catch (error) {
        dispatch(deleteCategoryError(error.stack));
    }
};
