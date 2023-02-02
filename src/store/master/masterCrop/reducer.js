import {
  GET_MASTER_CROP,
  ADD_MASTER_CROP,
  EDIT_MASTER_CROP,
  DELETE_MASTER_CROP,
  GET_MASTER_CROP_SUCCESS,
  ADD_MASTER_CROP_SUCCESS,
  DELETE_MASTER_CROP_SUCCESS,
  EDIT_MASTER_CROP_SUCCESS,
  EDIT_MASTER_CROP_FORM,
  ADD_MASTER_CROP_FROM,
  CLOSE_MASTER_CROP_MODAL
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
    case CLOSE_MASTER_CROP_MODAL:
      state = {
        ...state,
        isEditForm: false,
        isOpen: false,
        editFormData: {}
      }
      break;
    case EDIT_MASTER_CROP_FORM:
      state = {
        ...state,
        isEditForm: true,
        isOpen: true,
        editFormData: action.payload,
      };
      break;
    case ADD_MASTER_CROP_FROM:
      state = {
        ...state,
        isEditForm: false,
        isOpen: true,
        editFormData: {},
      };
      break;
    case GET_MASTER_CROP:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case GET_MASTER_CROP_SUCCESS:
      state = {
        ...state,
        data: action.payload,
        loading: true,
        error: false,
      };
      break;
    case ADD_MASTER_CROP:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case ADD_MASTER_CROP_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;
    case EDIT_MASTER_CROP:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case EDIT_MASTER_CROP_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;
    case DELETE_MASTER_CROP:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case DELETE_MASTER_CROP_SUCCESS:
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
