/*
 * LeafletMap reducer
 */
import produce from 'immer';
import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from './constants';
export const initialState = {
  devices: [],
  loading: true,
  error: false,
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
    }
  });

export default leafletMapReducer;
