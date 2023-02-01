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
  CLOSE_CROP_TYPE_MODAL,
  ADD_CROP_TYPE_FROM,
  PREV_CROP_TYPE_PAGE,
  NEXT_CROP_TYPE_PAGE,
} from "./action";

export const getCropType = () => ({
  type: GET_CROP_TYPE,
  payload: { displayStart: 0, displayLength: 10, SearchCropType: null },
});

export const getCropTypePrev = (payload) => ({
  type: PREV_CROP_TYPE_PAGE,
  payload: payload,
});

export const getCropTypeNext = (payload) => ({
  type: NEXT_CROP_TYPE_PAGE,
  payload: payload,
});

export const getCropTypeSuccess = (payload) => ({
  type: GET_CROP_TYPE_SUCCESS,
  payload: payload,
});

export const addCropType = (payload) => ({
  type: ADD_CROP_TYPE,
  payload: payload,
});

export const addCropTypeSuccess = (payload) => ({
  type: ADD_CROP_TYPE_SUCCESS,
  payload: payload,
});

export const editCropType = (payload) => ({
  type: EDIT_CROP_TYPE,
  payload: payload,
});

export const editCropTypeSuccess = (payload) => ({
  type: EDIT_CROP_TYPE_SUCCESS,
  payload: payload,
});

export const deleteCropType = (payload) => ({
  type: DELETE_CROP_TYPE,
  payload: payload,
});

export const deleteCropTypeSuccess = (payload) => ({
  type: DELETE_CROP_TYPE_SUCCESS,
  payload: payload,
});

export const editCropTypeFrom = (payload) => ({
  type: EDIT_CROP_TYPE_FORM,
  payload,
});
export const addCropTypeForm = (payload) => ({
  type: ADD_CROP_TYPE_FROM,
  payload,
});

export const closeAddEditCropTypeModal = (payload) => ({
  type: CLOSE_CROP_TYPE_MODAL,
  payload,
});
