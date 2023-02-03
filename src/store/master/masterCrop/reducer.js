import {
  GET_MASTER_CROP,
  GET_MASTER_CROP_SUCCESS,
  ADD_MASTER_CROP_SUCCESS,
  DELETE_MASTER_CROP_SUCCESS,
  EDIT_MASTER_CROP_SUCCESS,
  EDIT_MASTER_CROP_FORM,
  ADD_MASTER_CROP_FROM,
  CLOSE_MASTER_CROP_MODAL,
  START_MASTER_CROP_LIST_LOADING,
  STOP_MASTER_CROP_LIST_LOADING,
  STOP_MASTER_CROP_LOADING,
  ERROR_LOADING_MASTER_CROP,
  START_MASTER_CROP_LOADING,
  CLEAR_FORM_MASTER_CROP
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
  listLoading: false,
  loading: false,
  error: false,
  clearForm: 0,
};

const MasterCropReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_FORM_MASTER_CROP:
      state = {
        ...state,
        clearForm: state.clearForm + 1
      }
      break;
    case START_MASTER_CROP_LOADING:
      state = {
        ...state,
        loading: true,
      };
      break;
    case START_MASTER_CROP_LIST_LOADING:
      state = {
        ...state,
        listLoading: true,
      };
      break;
    case STOP_MASTER_CROP_LIST_LOADING:
      state = {
        ...state,
        listLoading: true,
      };
      break;
    case STOP_MASTER_CROP_LOADING:
      state = {
        ...state,
        loading: false,
      };
      break;
    case ERROR_LOADING_MASTER_CROP:
      state = {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
      break;
    case CLOSE_MASTER_CROP_MODAL:
      state = {
        ...state,
        isEditForm: false,
        isOpen: false,
        editFormData: {},
      };
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
        listLoading: true,
        error: false,
      };
      break;
    case GET_MASTER_CROP_SUCCESS:
      state = {
        ...state,
        data: action.payload,
        listLoading: false,
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
    case EDIT_MASTER_CROP_SUCCESS:
      state = {
        ...state,
        loading: false,
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
