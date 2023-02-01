import {
  GET_LOOKUP_CROP_TYPE,
  GET_LOOKUP_FARM_TYPE,
  GET_LOOKUP_IRRIGATION,
  GET_LOOKUP_MASTER_CROP,
  GET_LOOKUP_SOIL_TYPE,
  GET_LOOKUP_VARIETY_TYPE,
  GET_LOOKUP_YIELD_TYPE,
  GET_LOOKUP_FARM_TYPE_SUCCESS,
  LOOKUP_ERROR,
  LOOKUP_LOADING,
  GET_LOOKUP_SOIL_TYPE_SUCCESS,
  GET_LOOKUP_CROP_TYPE_SUCCESS,
  GET_LOOKUP_VARIETY_TYPE_SUCCESS,
  GET_LOOKUP_YIELD_TYPE_SUCCESS,
  GET_LOOKUP_IRRIGATION_SUCCESS,
  GET_LOOKUP_MASTER_CROP_SUCCESS
} from "./actionTypes";

const initialState = {
  farmType: [],
  cropType: [],
  soilType: [],
  varietyType: [],
  yieldType: [],
  irrigation: [],
  masterCrop: [],
  errorMsg: "",
  loading: false,
  error: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOOKUP_LOADING:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case LOOKUP_ERROR:
      state = {
        ...state,
        loading: false,
        errorMsg: action.payload,
        error: true,
      };
      break;
    case GET_LOOKUP_FARM_TYPE:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case GET_LOOKUP_FARM_TYPE_SUCCESS:
      state = {
        ...state,
        farmType: action.payload,
        loading: false,
        error: false,
      };
      break;
    case GET_LOOKUP_CROP_TYPE:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;
    case GET_LOOKUP_CROP_TYPE_SUCCESS:
      state = {
        ...state,
        cropType: action.payload,
        loading: false,
        error: false,
      };
      break;
    case GET_LOOKUP_SOIL_TYPE:
      state = {
        ...state,
        soilType: action.payload,
        loading: false,
        error: false,
      };
      break;
    case GET_LOOKUP_SOIL_TYPE_SUCCESS:
      state = {
        ...state,
        soilType: action.payload,
        loading: false,
        error: false,
      };
      break;
    case GET_LOOKUP_VARIETY_TYPE:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case GET_LOOKUP_VARIETY_TYPE_SUCCESS:
      state = {
        ...state,
        varietyType: action.payload,
        loading: false,
        error: false,
      };
      break;
    case GET_LOOKUP_YIELD_TYPE:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case GET_LOOKUP_YIELD_TYPE_SUCCESS:
      state = {
        ...state,
        yieldType: action.payload,
        loading: false,
        error: false,
      };
      break;
    case GET_LOOKUP_IRRIGATION:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case GET_LOOKUP_IRRIGATION_SUCCESS:
      state = {
        ...state,
        irrigation: action.payload,
        loading: false,
        error: false,
      };
      break;
    case GET_LOOKUP_MASTER_CROP:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case GET_LOOKUP_MASTER_CROP_SUCCESS:
      state = {
        ...state,
        masterCrop: action.payload,
        loading: false,
        error: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default login;
