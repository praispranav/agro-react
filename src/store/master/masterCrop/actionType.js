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
  CLOSE_MASTER_CROP_MODAL,
  ADD_MASTER_CROP_FROM,
  PREV_MASTER_CROP_PAGE,
  NEXT_MASTER_CROP_PAGE,
} from "./action";

export const getMasterCrop = () => ({
  type: GET_MASTER_CROP,
  payload: { displayStart: 0, displayLength: 10, SearchCropType: null },
});

export const getMasterCropPrev = (payload) => ({
  type: PREV_MASTER_CROP_PAGE,
  payload: payload,
});

export const getMasterCropNext = (payload) => ({
  type: NEXT_MASTER_CROP_PAGE,
  payload: payload,
});

export const getMasterCropSuccess = (payload) => ({
  type: GET_MASTER_CROP_SUCCESS,
  payload: payload,
});

export const addMasterCrop = (payload) => ({
  type: ADD_MASTER_CROP,
  payload: payload,
});

export const addMasterCropSuccess = (payload) => ({
  type: ADD_MASTER_CROP_SUCCESS,
  payload: payload,
});

export const editMasterCrop = (payload) => ({
  type: EDIT_MASTER_CROP,
  payload: payload,
});

export const editMasterCropSuccess = (payload) => ({
  type: EDIT_MASTER_CROP_SUCCESS,
  payload: payload,
});

export const deleteMasterCrop = (payload) => ({
  type: DELETE_MASTER_CROP,
  payload: payload,
});

export const deleteMasterCropSuccess = (payload) => ({
  type: DELETE_MASTER_CROP_SUCCESS,
  payload: payload,
});

export const editMasterCropFrom = (payload) => ({
  type: EDIT_MASTER_CROP_FORM,
  payload,
});
export const addMasterCropForm = (payload) => ({
  type: ADD_MASTER_CROP_FROM,
  payload,
});

export const closeAddEditMasterCropModal = (payload) => ({
  type: CLOSE_MASTER_CROP_MODAL,
  payload,
});
