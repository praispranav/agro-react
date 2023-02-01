import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();

export const fetchMasterCrop = (data) => api.get(url.GET_MASTER_CROP, data);
export const addMasterCrop = (data) => api.create(url.ADD_MASTER_CROP, data);
export const editMasterCrop = (data) => api.create(url.EDIT_MASTER_CROP, data);
export const deleteMasterCrop = (data) => api.create(url.DELETE_MASTER_CROP, data);

export const fetchCropType = (data) => api.get(url.GET_CROP_TYPE, data)
export const addCropType = (data) => api.create(url.ADD_CROP_TYPE, data)
export const editCropType = (data) => api.create(url.EDIT_CROP_TYPE, data)
export const deleteCropType = (data) => api.create(url.DELETE_CROP_TYPE, data)