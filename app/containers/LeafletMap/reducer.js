/*
 * LeafletMap reducer
 */
import produce from 'immer';
import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  SET_CURRENT_DEVICE,
  SET_CURRENT_DEVICE_SUCCESS,
  SET_CURRENT_DEVICE_ERROR,
} from './constants';
export const initialState = {
  devices: [],
  loading: true,
  error: false,
  currentDeviceId: 0,
  currentDevice: {},
};

/* eslint-disable default-case, no-param-reassign */
const leafletMapReducer = (state = initialState, action) =>
  produce(state, draftState => {
    switch (action.type) {
      case FETCH_DATA:
        draftState.loading = true;
        draftState.error = false;
        break;
      case FETCH_DATA_ERROR:
        draftState.loading = false;
        draftState.error = action.error;
        break;
      case FETCH_DATA_SUCCESS:
        draftState.loading = false;
        draftState.error = false;
        draftState.devices = action.devices;
        break;
      case SET_CURRENT_DEVICE:
        draftState.currentDeviceId = action.deviceId;
        draftState.loading = true;
        break;
      case SET_CURRENT_DEVICE_SUCCESS:
        draftState.currentDevice = action.device;
        draftState.loading = false;
        break;
      case SET_CURRENT_DEVICE_ERROR:
        draftState.error = action.error;
        draftState.loading = false;
        break;
    }
  });

export default leafletMapReducer;
