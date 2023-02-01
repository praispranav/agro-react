import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import {
  fetchCropType,
  fetchFarmType,
  fetchIrrigation,
  fetchMasterCrop,
  fetchSoilType,
  fetchVarietyType,
  fetchYieldType,
} from "../../helpers/lookup_helper";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GET_LOOKUP_CROP_TYPE,
  GET_LOOKUP_FARM_TYPE,
  GET_LOOKUP_IRRIGATION,
  GET_LOOKUP_MASTER_CROP,
  GET_LOOKUP_SOIL_TYPE,
  GET_LOOKUP_VARIETY_TYPE,
  GET_LOOKUP_YIELD_TYPE,
} from "./actionTypes";
import {
  errorLookup,
  // getCropTypeDataSuccess,
  getCropTypeDataSuccess,
  startLookupLoading,
  getFarmTypeDataSuccess,
  getSoilTypeDataSuccess,
  getVarietyTypeDataSuccess,
  getYieldTypeDataSuccess,
  getIrrigationDataSuccess,
  getMasterCropDataSuccess,
} from "./actions";

export function* getFarmType() {
  try {
    const response = yield call(fetchFarmType);
    yield put(getFarmTypeDataSuccess(response.data));
  } catch (error) {
    yield put(errorLookup(error));
    toast.error("Failed to Load Farm Type Data.", { autoClose: 4000 });
  }
}

export function* getCropType() {
  try {
    startLookupLoading();
    const response = yield call(fetchCropType);
    yield put(getCropTypeDataSuccess(response.data));
  } catch (error) {
    yield put(errorLookup(error));
    toast.error("Failed to Load Crop Type Data.", { autoClose: 4000 });
  }
}
export function* getSoilType() {
  try {
    const response = yield call(fetchSoilType);
    yield put(getSoilTypeDataSuccess(response.data));
  } catch (error) {
    yield put(errorLookup(error));
    console.log(error);
    toast.error("Failed to Load Soil Type Data.", { autoClose: 4000 });
  }
}

export function* getVarietyType() {
  try {
    startLookupLoading();
    const response = yield call(fetchVarietyType);
    console.log("Variety", response);
    yield put(getVarietyTypeDataSuccess(response.data));
  } catch (error) {
    yield put(errorLookup(error));
    toast.error("Failed to Load Variety Type Data.", { autoClose: 4000 });
  }
}

export function* getYieldType() {
  try {
    startLookupLoading();
    const response = yield call(fetchYieldType);
    yield put(getYieldTypeDataSuccess(response.data));
  } catch (error) {
    yield put(errorLookup(error));
    toast.error("Failed to Load Yield Type Data.", { autoClose: 4000 });
  }
}

export function* getIrrigation() {
  try {
    startLookupLoading();
    const response = yield call(fetchIrrigation);
    yield put(getIrrigationDataSuccess(response.data));
  } catch (error) {
    yield put(errorLookup(error));
    toast.error("Failed to Load Irrigation Data.", { autoClose: 4000 });
  }
}

export function* getMasterCrop({ payload: { search } }) {
  try {
    startLookupLoading();
    const response = yield call(fetchMasterCrop, { SearchCropType: search });
    yield put(getMasterCropDataSuccess(response.data));
  } catch (error) {
    yield put(errorLookup(error));
    toast.error("Failed to Load Master Crop Data.", { autoClose: 4000 });
  }
}

function* lookupSaga() {
  yield takeLatest(GET_LOOKUP_FARM_TYPE, getFarmType);
  yield takeEvery(GET_LOOKUP_SOIL_TYPE, getSoilType);
  yield takeEvery(GET_LOOKUP_VARIETY_TYPE, getVarietyType);
  yield takeEvery(GET_LOOKUP_CROP_TYPE, getCropType);
  yield takeEvery(GET_LOOKUP_YIELD_TYPE, getYieldType);
  yield takeEvery(GET_LOOKUP_IRRIGATION, getIrrigation);
  yield takeEvery(GET_LOOKUP_MASTER_CROP, getMasterCrop);
}

export default lookupSaga;
