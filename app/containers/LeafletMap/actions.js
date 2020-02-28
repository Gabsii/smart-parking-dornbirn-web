/*
 *
 * LeafletMap actions
 *
 */

import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  SET_CURRENT_DEVICE,
  SET_CURRENT_DEVICE_SUCCESS,
  SET_CURRENT_DEVICE_ERROR,
} from './constants';

export const fetchDevices = () => ({ type: FETCH_DATA });

export const fetchDevicesSuccess = devices => ({
  type: FETCH_DATA_SUCCESS,
  devices,
});

export const fetchDevicesError = error => ({
  type: FETCH_DATA_ERROR,
  error,
});

export const setCurrentDevice = deviceId => ({
  type: SET_CURRENT_DEVICE,
  deviceId,
});

export const setCurrentDeviceSuccess = device => ({
  type: SET_CURRENT_DEVICE_SUCCESS,
  device,
});

export const setCurrentDeviceError = error => ({
  type: SET_CURRENT_DEVICE_ERROR,
  error,
});
