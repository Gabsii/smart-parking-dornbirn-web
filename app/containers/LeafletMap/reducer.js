/*
 * LeafletMap reducer
 */
import produce from 'immer';
import { 
  FETCH_DATA, 
  FETCH_DATA_ERROR, 
  FETCH_DATA_SUCCESS,
  BUTTON_CLICK,
} from './constants';
export const initialState = {
  devices: [],
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
        console.log(action);
        state.loading = false;
        state.error = false;
        state.devices = action.devices;
        console.log("fetch succ", state);
        break;
      case BUTTON_CLICK: 
        state.loading = !state.loading;
        break;
    }
  });

export default leafletMapReducer;
