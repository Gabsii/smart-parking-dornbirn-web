/*
 *
 * LeafletMap actions
 *
 */

import { 
  FETCH_DATA, 
  FETCH_DATA_ERROR, 
  FETCH_DATA_SUCCESS,
  CLICK_DEVICE,
  BUTTON_CLICK
} from './constants';

export function fetchDevices() {
  return {
    type: FETCH_DATA,
  };
}

export function fetchDevicesSuccess(devices) {
  console.log('fetched', devices);
  
  return {
    type: FETCH_DATA_SUCCESS,
    devices
  };
}

export function fetchDevicesError(error) {
  return {
    type: FETCH_DATA_ERROR,
    error
  };
}

export function clickDevice(deviceId) {
  return {
    type: CLICK_DEVICE,
    deviceId,
  };
}

export function buttonClicked() {
  return {
    type: BUTTON_CLICK,
  };
}