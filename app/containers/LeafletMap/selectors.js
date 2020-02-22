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
    leafletMapState => leafletMapState.devices
  ); 

const makeSelectLoading = () =>
  createSelector(
    selectLeafletMapDomain,
    leafletMapState => leafletMapState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectLeafletMapDomain,
    leafletMapState => leafletMapState.error,
  );

/**
 * Default selector used by LeafletMap
 */

const makeSelectLeafletMap = () =>
  createSelector(selectLeafletMapDomain, leafletMapState => leafletMapState.toJS());

export default makeSelectLeafletMap;
export { 
  selectLeafletMapDomain, 
  makeSelectDevices, 
  makeSelectLoading, 
  makeSelectError
};
