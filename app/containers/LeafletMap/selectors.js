import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the leafletMap state domain
 */

const selectLeafletMapDomain = state => state.leafletMap || initialState;

/**
 * Other specific selectors
 */

const makeSelectDevices = () =>
  createSelector(
    selectLeafletMapDomain,
    leafletMapState => leafletMapState.devices,
  );

const makeSelectAllLoading = () =>
  createSelector(
    selectLeafletMapDomain,
    leafletMapState => leafletMapState.allLoading,
  );

const makeSelectSingleLoading = () =>
  createSelector(
    selectLeafletMapDomain,
    leafletMapState => leafletMapState.singleLoading,
  );

const makeSelectError = () =>
  createSelector(
    selectLeafletMapDomain,
    leafletMapState => leafletMapState.error,
  );

const makeSelectCurrentDevice = () =>
  createSelector(
    selectLeafletMapDomain,
    leafletMapState => leafletMapState.currentDevice,
  );

/**
 * Default selector used by LeafletMap
 */

const makeSelectLeafletMap = () =>
  createSelector(
    selectLeafletMapDomain,
    leafletMapState => leafletMapState.toJS(),
  );

export default makeSelectLeafletMap;
export {
  selectLeafletMapDomain,
  makeSelectDevices,
  makeSelectAllLoading,
  makeSelectSingleLoading,
  makeSelectError,
  makeSelectCurrentDevice,
};
