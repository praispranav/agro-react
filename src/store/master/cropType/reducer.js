import {
  GET_CROP_TYPE,
  ADD_CROP_TYPE,
  EDIT_CROP_TYPE,
  DELETE_CROP_TYPE,
  GET_CROP_TYPE_SUCCESS,
  ADD_CROP_TYPE_SUCCESS,
  DELETE_CROP_TYPE_SUCCESS,
  EDIT_CROP_TYPE_SUCCESS,
  EDIT_CROP_TYPE_FORM,
  ADD_CROP_TYPE_FROM,
  CLOSE_CROP_TYPE_MODAL
} from "./action";

const initialState = {
  data: [],
  isEditForm: false,
  displayLength: 10,
  displayStart: 0,
  SearchCropType: null,
  editFormData: {},
  isOpen: false,
  errorMsg: "",
  loading: false,
  error: false,
};

const MasterCropReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_CROP_TYPE_MODAL:
      state = {
        ...state,
        isEditForm: false,
        isOpen: false,
        editFormData: {}
      }
      break;
    case EDIT_CROP_TYPE_FORM:
      state = {
        ...state,
        isEditForm: true,
        isOpen: true,
        editFormData: action.payload,
      };
      break;
    case ADD_CROP_TYPE_FROM:
      state = {
        ...state,
        isEditForm: false,
        isOpen: true,
        editFormData: {},
      };
      break;
    case GET_CROP_TYPE:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case GET_CROP_TYPE_SUCCESS:
      state = {
        ...state,
        data: action.payload,
        loading: true,
        error: false,
      };
      break;
    case ADD_CROP_TYPE:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case ADD_CROP_TYPE_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;
    case EDIT_CROP_TYPE:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case EDIT_CROP_TYPE_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;
    case DELETE_CROP_TYPE:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case DELETE_CROP_TYPE_SUCCESS:
      state = {
        ...state,
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

export default MasterCropReducer;
