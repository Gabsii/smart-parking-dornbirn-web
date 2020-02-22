import { all, call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchDevicesSuccess, fetchDevicesError } from './actions';
import { FETCH_DATA } from './constants';

export function* fetchDevicesAsync() {
  yield takeLatest(FETCH_DATA, fetchAllDevices);
}

function* fetchAllDevices() {
  try {
    const requestUrl = process.env.NODE_ENV === 'production' 
      ? '/api/devices'
      : 'http://localhost:8000/device';
    const devices = yield call(request, requestUrl)
    console.log('fetch done')

    yield put(fetchDevicesSuccess(devices));
  } catch (error) {
    yield put(fetchDevicesError(error.toString()));    
  }
}

export default function* rootSaga() {
  yield all([fetchDevicesAsync()]);
}