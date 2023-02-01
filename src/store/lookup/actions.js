import {
  GET_LOOKUP_VARIETY_TYPE_SUCCESS,
    GET_LOOKUP_CROP_TYPE,
  GET_LOOKUP_FARM_TYPE_SUCCESS,
  GET_LOOKUP_FARM_TYPE,
  GET_LOOKUP_IRRIGATION,
  GET_LOOKUP_SOIL_TYPE,
  GET_LOOKUP_VARIETY_TYPE,
  GET_LOOKUP_YIELD_TYPE,
  LOOKUP_ERROR,
  LOOKUP_LOADING,
  GET_LOOKUP_SOIL_TYPE_SUCCESS,
  GET_LOOKUP_CROP_TYPE_SUCCESS,
  GET_LOOKUP_MASTER_CROP_SUCCESS,
  GET_LOOKUP_MASTER_CROP,
  GET_LOOKUP_YIELD_TYPE_SUCCESS,
  GET_LOOKUP_IRRIGATION_SUCCESS
} from "./actionTypes";

export const startLookupLoading = () => ({
  type: LOOKUP_LOADING,
});

export const errorLookup = (error) => ({
  type: LOOKUP_ERROR,
  payload: error,
});

export const getFarmTypeData = (data) => ({
  type: GET_LOOKUP_FARM_TYPE,
  payload: data,
});

export const getFarmTypeDataSuccess = (data) => ({
  type: GET_LOOKUP_FARM_TYPE_SUCCESS,
  payload: data,
});

export const getCropTypeData = (data) => ({
  type: GET_LOOKUP_CROP_TYPE,
  payload: data,
});

export const getCropTypeDataSuccess = (data) => ({
  type: GET_LOOKUP_CROP_TYPE_SUCCESS,
  payload: data,
});

export const getSoilTypeData = (data) => ({
  type: GET_LOOKUP_SOIL_TYPE,
  payload: data,
});
export const getSoilTypeDataSuccess = (data) => ({
  type: GET_LOOKUP_SOIL_TYPE_SUCCESS,
  payload: data,
});

export const getVarietyTypeData = (data) => ({
  type: GET_LOOKUP_VARIETY_TYPE,
  payload: null,
});

export const getVarietyTypeDataSuccess = (data) => ({
  type: GET_LOOKUP_VARIETY_TYPE_SUCCESS,
  payload: data,
});

export const getYieldTypeData = (data) => ({
  type: GET_LOOKUP_YIELD_TYPE,
  payload: data,
});

export const getYieldTypeDataSuccess = (data) => ({
  type: GET_LOOKUP_YIELD_TYPE_SUCCESS,
  payload: data,
});

export const getIrrigationData = (data) => ({
  type: GET_LOOKUP_IRRIGATION,
  payload: data,
});

export const getIrrigationDataSuccess = (data) => ({
  type: GET_LOOKUP_IRRIGATION_SUCCESS,
  payload: data,
});

export const getMasterCropData = (data) => ({
  type: GET_LOOKUP_MASTER_CROP,
  payload: data,
});

export const getMasterCropDataSuccess = (data) => ({
  type: GET_LOOKUP_MASTER_CROP_SUCCESS,
  payload: data,
});
