/*
 *
 * LeafletMap actions
 *
 */

import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from './constants';

export const fetchDevices = () => ({ type: FETCH_DATA });

export const fetchDevicesSuccess = devices => ({
  type: FETCH_DATA_SUCCESS,
  devices,
});

export const fetchDevicesError = error => ({
  type: FETCH_DATA_ERROR,
  error,
});
