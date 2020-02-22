/*
 *
 * LeafletMap reducer
 *
 */
import produce from 'immer';
import { 
  FETCH_DATA, 
  FETCH_DATA_ERROR, 
  FETCH_DATA_SUCCESS,
} from './constants';
export const initialState = {
  devices: [{}],
  currDevice: 0,
  loading: true,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const leafletMapReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case FETCH_DATA:
        state.loading = true;
        state.error = false;
        break;
      case FETCH_DATA_ERROR:
        state.loading = false
        state.error = action.error;
        break;
      case FETCH_DATA_SUCCESS:
        state.loading = false;
        state.error = false;
        state.devices = []
        state.devices.push(action.devices);
        console.log('success', state);
        break;
    }
  });

export default leafletMapReducer;
