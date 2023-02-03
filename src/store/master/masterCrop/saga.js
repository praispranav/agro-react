import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  addMasterCrop as addMasterCropApi, deleteMasterCrop as deleteMasterCropApi, editMasterCrop as editMasterCropApi, fetchMasterCrop
} from "../../../helpers/normal_api_helper";
import {
  ADD_MASTER_CROP, DELETE_MASTER_CROP, EDIT_MASTER_CROP, GET_MASTER_CROP
} from "./action";
import {
  addMasterCropSuccess,
  clearFormMasterCrop,
  closeAddEditMasterCropModal,
  deleteMasterCropSuccess,
  editMasterCropSuccess, errorMasterCropLoading, getMasterCrop as getMasterCropAction, getMasterCropSuccess,
  startMasterCropListLoading, startMasterCropLoading, stopMasterCropListLoading, stopMasterCropLoading
} from "./actionType";

export function* getMasterCrop({ payload }) {
  try {
    console.log("Payload", payload);
    yield put(startMasterCropListLoading());
    const response = yield call(fetchMasterCrop, payload);
    yield put(getMasterCropSuccess(response.data));
    yield put(stopMasterCropListLoading());
  } catch (error) {
    yield put(errorMasterCropLoading(""));
    toast.error("Failed to Load Farm Type Data.", { autoClose: 4000 });
  }
}

export function* addMasterCrop({ payload }) {
  try {
    yield put(startMasterCropLoading());
    const response = yield call(addMasterCropApi, payload);
    yield put(addMasterCropSuccess(response.data));
    if (response) {
      toast.success(response.message, { autoClose: 3000 });
    }
    yield put(addMasterCropSuccess(response.data));
    yield put(closeAddEditMasterCropModal());
    yield put(stopMasterCropLoading());
    yield put(clearFormMasterCrop());
    yield put(getMasterCropAction());
  } catch (error) {
    yield put(errorMasterCropLoading(""));
    toast.error("Failed to Load Master Crop Data.", { autoClose: 4000 });
  }
}
export function* editMasterCrop({ payload }) {
  try {
    yield put(startMasterCropLoading());
    const response = yield call(editMasterCropApi, payload);
    if (response) {
      toast.success(response.message, { autoClose: 3000 });
    }
    yield put(editMasterCropSuccess(response.data));
    yield put(closeAddEditMasterCropModal());
    yield put(stopMasterCropLoading());
    yield put(clearFormMasterCrop());
    yield put(getMasterCropAction());
  } catch (error) {
    yield put(errorMasterCropLoading(""));
    toast.error("Failed to Load Farm Type Data.", { autoClose: 4000 });
  }
}

export function* deleteMasterCrop({ payload }) {
  try {
    yield put(startMasterCropLoading());
    const response = yield call(deleteMasterCropApi, payload);
    yield put(deleteMasterCropSuccess(response.data));
    yield put(stopMasterCropLoading());
    if (response) {
      toast.success(response.message, { autoClose: 3000 });
    }
  } catch (error) {
    yield put(errorMasterCropLoading(""));
    toast.error("Failed to Load Farm Type Data.", { autoClose: 4000 });
  }
}

function* MasterCropSaga() {
  yield takeLatest(GET_MASTER_CROP, getMasterCrop);
  yield takeLatest(ADD_MASTER_CROP, addMasterCrop);
  yield takeLatest(EDIT_MASTER_CROP, editMasterCrop);
  yield takeLatest(DELETE_MASTER_CROP, deleteMasterCrop);
}

export default MasterCropSaga;
