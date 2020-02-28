import { all, call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  fetchDevicesSuccess,
  fetchDevicesError,
  setCurrentDeviceSuccess,
  setCurrentDeviceError,
} from './actions';
import { FETCH_DATA, SET_CURRENT_DEVICE } from './constants';

function* fetchDevicesAsync() {
  yield takeLatest(FETCH_DATA, fetchAllDevices);
}

function* fetchAllDevices() {
  try {
    const requestUrl =
      process.env.NODE_ENV === 'production'
        ? '/api/devices'
        : 'http://localhost:8000/device';
    const devices = yield call(request, requestUrl);

    yield put(fetchDevicesSuccess(devices));
  } catch (error) {
    yield put(fetchDevicesError(error.toString()));
  }
}

function* fetchCurrentAsync() {
  yield takeLatest(SET_CURRENT_DEVICE, fetchSingleDevice);
}

function* fetchSingleDevice(action) {
  const id = action.deviceId;
  try {
    const requestUrl =
      process.env.NODE_ENV === 'production'
        ? `/api/devices/id.js?id=${id}`
        : `http://localhost:8000/device/${id}`;
    const devices = yield call(request, requestUrl);

    yield put(setCurrentDeviceSuccess(devices));
  } catch (error) {
    yield put(setCurrentDeviceError(error.toString()));
  }
}

export default function* rootSaga() {
  yield all([fetchDevicesAsync(), fetchCurrentAsync()]);
}
