import ShopConstants from '../constants/ShopConstants';
import shopApi from '../api/ShopApi';

// ---------------------- Update --------------------------------------------------
const updateShopBegin = () => ({
    type: ShopConstants.UPDATE_SHOP_BEGIN,
});

const updateShopSuccess = (shop) => ({
    type: ShopConstants.UPDATE_SHOP_SUCCESS,
    payload: shop,
});

const updateShopError = (error) => ({
    type: ShopConstants.UPDATE_SHOP_ERROR,
    payload: error,
});

// ---------------------- Fetch --------------------------------------------------
const fetchShopBegin = () => ({
    type: ShopConstants.FETCH_SHOP_BEGIN,
});

const fetchShopSuccess = (shops) => ({
    type: ShopConstants.FETCH_SHOP_SUCCESS,
    payload: shops,
});

const fetchShopError = (error) => ({
    type: ShopConstants.FETCH_SHOP_ERROR,
    payload: error,
});

// ---------------------- Save --------------------------------------------------
const saveShopBegin = () => ({
    type: ShopConstants.SAVE_SHOP_BEGIN,
});

const saveShopSuccess = (status) => ({
    type: ShopConstants.SAVE_SHOP_SUCCESS,
    payload: status,
});

const saveShopError = (error) => ({
    type: ShopConstants.SAVE_SHOP_ERROR,
    payload: error,
});

// ---------------------- Delete --------------------------------------------------
const deleteShopBegin = () => ({
    type: ShopConstants.DELETE_SHOP_BEGIN,
});

const deleteShopSuccess = (status) => ({
    type: ShopConstants.DELETE_SHOP_SUCCESS,
    payload: status,
});

const deleteShopError = (error) => ({
    type: ShopConstants.DELETE_SHOP_ERROR,
    payload: error,
});

export const shopUpdateActions = (shop, id) => async (dispatch) => {
    dispatch(updateShopBegin());
    try {
        const response = await shopApi.updateShop(shop, id);
        dispatch(updateShopSuccess(response.data));
    } catch (error) {
        dispatch(updateShopError(error.stack));
    }
};

export const shopFetchActions = () => async (dispatch) => {
    dispatch(fetchShopBegin());
    try {
        const response = await shopApi.getShops();
        dispatch(fetchShopSuccess(response.data));
    } catch (error) {
        dispatch(fetchShopError(error.stack));
    }
};

export const shopSaveActions = (shop) => async (dispatch) => {
    dispatch(saveShopBegin());
    try {
        const response = await shopApi.saveShop(shop);
        dispatch(saveShopSuccess(response.data));
    } catch (error) {
        dispatch(saveShopError(error.stack));
    }
};

export const shopDeleteActions = (id) => async (dispatch) => {
    dispatch(deleteShopBegin());
    try {
        const response = await shopApi.deleteShop(id);
        dispatch(deleteShopSuccess(response.data));
    } catch (error) {
        dispatch(deleteShopError(error.stack));
    }
};
