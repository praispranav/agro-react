import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();

export const fetchFarmType = () => api.get(url.LOOKUP_FARM_TYPE);
export const fetchCropType = () => api.get(url.LOOKUP_CROP_TYPE);
export const fetchSoilType = () => api.get(url.LOOKUP_SOIL_TYPE);
export const fetchVarietyType = () => api.get(url.LOOKUP_VARIETY_TYPE);
export const fetchYieldType = () => api.get(url.LOOKUP_YIELD_TYPE);
export const fetchIrrigation = () => api.get(url.LOOKUP_IRRIGATION);
export const fetchMasterCrop = (data) => api.get(url.LOOKUP_MASTER_CROP, data);
