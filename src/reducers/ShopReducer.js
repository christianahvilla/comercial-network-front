import shopConstants from '../constants/ShopConstants';
import imageConstanst from '../constants/ImageConstants';

const INITIAL_STATE = {
    shops: [],
    error: '',
    loading: false,
    status: null,
    urlImage: '',
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case shopConstants.UPDATE_SHOP_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case shopConstants.UPDATE_SHOP_SUCCESS:
        return {
            ...state,
            shops: state.shops.map((item) => {
                return item.id === action.payload.id ? action.payload : item;
            }),
            loading: false,
        };

    case shopConstants.UPDATE_SHOP_ERROR:
        return { ...state, error: action.payload, loading: false };

    case shopConstants.FETCH_SHOP_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case shopConstants.FETCH_SHOP_SUCCESS:
        return { ...state, loading: false, shops: action.payload };

    case shopConstants.FETCH_SHOP_ERROR:
        return { ...state, loading: false, error: action.payload };

    case shopConstants.SAVE_SHOP_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case shopConstants.SAVE_SHOP_SUCCESS:
        return {
            ...state,
            shops: state.shops.concat(action.payload).sort((a, b) => (a.shop > b.shop ? 1 : -1)),
            loading: false,
        };

    case shopConstants.SAVE_SHOP_ERROR:
        return { ...state, error: action.payload, loading: false };

    case shopConstants.DELETE_SHOP_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case shopConstants.DELETE_SHOP_SUCCESS:
        return {
            ...state,
            shops: state.shops.filter((item) => item.id !== action.payload.id),
            loading: false,
        };

    case shopConstants.DELETE_SHOP_ERROR:
        return { ...state, error: action.payload, loading: false };

    case imageConstanst.SAVE_IMAGE_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: null,
        };

    case imageConstanst.SAVE_IMAGE_SUCCESS:
        return {
            ...state,
            urlImage: action.payload,
            loading: false,
        };

    case imageConstanst.SAVE_IMAGE_ERROR:
        return {
            ...state,
            error: action.payload,
            loading: false,
        };

    case imageConstanst.DELETE_IMAGE_BEGIN:
        return {
            ...state,
            status: null,
            loading: true,
            error: null,
        };

    case imageConstanst.DELETE_IMAGE_SUCCESS:
        return {
            ...state,
            urlImage: action.payload,
            loading: false,
        };

    case imageConstanst.DELETE_SHOP_ERROR:
        return {
            ...state,
            error: action.payload,
            loading: false,
        };

    default:
        return state;
    }
};

export default shopReducer;
