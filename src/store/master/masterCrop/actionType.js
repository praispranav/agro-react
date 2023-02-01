import {
  GET_MASTER_CROP,
  ADD_MASTER_CROP,
  EDIT_MASTER_CROP,
  DELETE_MASTER_CROP,
  GET_MASTER_CROP_SUCCESS,
  ADD_MASTER_CROP_SUCCESS,
  DELETE_MASTER_CROP_SUCCESS,
  EDIT_MASTER_CROP_SUCCESS,
} from "./action";

export const getMasterCrop = (payload) => ({
  type: GET_MASTER_CROP,
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
