import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_MASTER_CROP,
  ADD_MASTER_CROP,
  EDIT_MASTER_CROP,
  DELETE_MASTER_CROP,
} from "./action";
import {
  fetchMasterCrop,
  addMasterCrop as addMasterCropApi,
  editMasterCrop as editMasterCropApi,
  deleteMasterCrop as deleteMasterCropApi,
} from "../../../helpers/normal_api_helper";
import {
  addMasterCropSuccess,
  deleteMasterCropSuccess,
  editMasterCropSuccess,
  getMasterCropSuccess,
} from "./actionType";
import { toast } from "react-toastify";

export function* getMasterCrop({ payload }) {
  try {
    const response = yield call(fetchMasterCrop, payload);
    yield put(getMasterCropSuccess(response.data));
  } catch (error) {
    // yield put(errorLookup(error));
    toast.error("Failed to Load Farm Type Data.", { autoClose: 4000 });
  }
}

export function* addMasterCrop({ payload }) {
  try {
    const response = yield call(addMasterCropApi, payload);
    yield put(addMasterCropSuccess(response.data));
  } catch (error) {
    // yield put(errorLookup(error));
    toast.error("Failed to Load Farm Type Data.", { autoClose: 4000 });
  }
}
export function* editMasterCrop({ payload }) {
  try {
    const response = yield call(editMasterCropApi, payload);
    yield put(editMasterCropSuccess(response.data));
  } catch (error) {
    // yield put(errorLookup(error));
    toast.error("Failed to Load Farm Type Data.", { autoClose: 4000 });
  }
}

export function* deleteMasterCrop({ payload }) {
  try {
    const response = yield call(deleteMasterCropApi, payload);
    yield put(deleteMasterCropSuccess(response.data));
  } catch (error) {
    // yield put(errorLookup(error));
    toast.error("Failed to Load Farm Type Data.", { autoClose: 4000 });
  }
}

function* masterCropSaga() {
  yield takeLatest(GET_MASTER_CROP, getMasterCrop);
  yield takeLatest(ADD_MASTER_CROP, addMasterCrop);
  yield takeLatest(EDIT_MASTER_CROP, editMasterCrop);
  yield takeLatest(DELETE_MASTER_CROP, deleteMasterCrop);
}

export default masterCropSaga;
