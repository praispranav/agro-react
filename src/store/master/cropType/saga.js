import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_CROP_TYPE,
  ADD_CROP_TYPE,
  EDIT_CROP_TYPE,
  DELETE_CROP_TYPE,
} from "./action";
import {
  fetchCropType,
  addCropType as addCropTypeApi,
  editCropType as editCropTypeApi,
  deleteCropType as deleteCropTypeApi,
} from "../../../helpers/normal_api_helper";
import {
  getCropType as getCropTypeAction,
  addCropTypeSuccess,
  closeAddEditCropTypeModal,
  deleteCropTypeSuccess,
  editCropTypeSuccess,
  getCropTypeSuccess,
} from "./actionType";
import { toast } from "react-toastify";

export function* getCropType({ payload }) {
  try {
    const response = yield call(fetchCropType, payload);

    yield put(getCropTypeSuccess(response.data));
  } catch (error) {
    // yield put(errorLookup(error));
    toast.error("Failed to Load Farm Type Data.", { autoClose: 4000 });
  }
}

export function* addCropType({ payload }) {
  try {
    const response = yield call(addCropTypeApi, payload);
    yield put(addCropTypeSuccess(response.data));
    if (response) {
      toast.success(response.message, { autoClose: 3000 });
    }
    yield put(addCropTypeSuccess(response.data));
    yield put(closeAddEditCropTypeModal());
    yield put(getCropTypeAction());
  } catch (error) {
    // yield put(errorLookup(error));
    toast.error("Failed to Load Farm Type Data.", { autoClose: 4000 });
  }
}
export function* editCropType({ payload }) {
  try {
    const response = yield call(editCropTypeApi, payload);
    if (response) {
      toast.success(response.message, { autoClose: 3000 });
    }
    yield put(editCropTypeSuccess(response.data));
    yield put(closeAddEditCropTypeModal());
    yield put(getCropTypeAction());
  } catch (error) {
    // yield put(errorLookup(error));
    toast.error("Failed to Load Farm Type Data.", { autoClose: 4000 });
  }
}

export function* deleteCropType({ payload }) {
  try {
    const response = yield call(deleteCropTypeApi, payload);
    yield put(deleteCropTypeSuccess(response.data));
    if (response) {
      toast.success(response.message, { autoClose: 3000 });
    }
  } catch (error) {
    // yield put(errorLookup(error));
    toast.error("Failed to Load Farm Type Data.", { autoClose: 4000 });
  }
}

function* cropTypeSaga() {
  yield takeLatest(GET_CROP_TYPE, getCropType);
  yield takeLatest(ADD_CROP_TYPE, addCropType);
  yield takeLatest(EDIT_CROP_TYPE, editCropType);
  yield takeLatest(DELETE_CROP_TYPE, deleteCropType);
}

export default cropTypeSaga;
