/**
 * LeafletMap
 */
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Map, Marker, TileLayer } from 'react-leaflet';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectDevices,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import { fetchDevices, setCurrentDevice } from './actions';
import saga from './saga';
import messages from './messages';
import MapMarker from './Icon';

import free from './iconMarker-free.svg';
import parked from './iconMarker-parked.svg';

export function LeafletMap(props) {
  const {
    devices,
    loading,
    error,
    fetchDevicesProp,
    setCurrentDeviceProp,
  } = props;

  useInjectReducer({ key: 'leafletMap', reducer });
  useInjectSaga({ key: 'leafletMap', saga });

  useEffect(() => {
    fetchDevicesProp();
  }, [fetchDevicesProp]);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <br />
      {loading ? 'loading...' : ''}
      <Map
        center={[47.3, 9.9]}
        zoom={9}
        maxZoom={18}
        style={{ height: '500px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {!loading &&
          !error &&
          devices &&
          devices.map(device => {
            const coordinates = [device.latitude, device.longitude];
            const { id, isParked } = device;
            return (
              <Marker
                icon={isParked ? MapMarker(parked) : MapMarker(free)}
                key={id}
                position={coordinates}
                onClick={() => {
                  setCurrentDeviceProp(id);
                }}
              />
            );
          })}
      </Map>
    </div>
  );
}

LeafletMap.propTypes = {
  devices: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.any,
  fetchDevicesProp: PropTypes.func,
  setCurrentDeviceProp: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  devices: makeSelectDevices(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchDevicesProp: () => dispatch(fetchDevices()),
    setCurrentDeviceProp: deviceId => dispatch(setCurrentDevice(deviceId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LeafletMap);
