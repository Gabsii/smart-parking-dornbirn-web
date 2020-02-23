/**
 * LeafletMap
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectDevices,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import { fetchDevices } from './actions';
import saga from './saga';
import messages from './messages';
import MapMarker from './Icon';

import free from './iconMarker-free.svg';
import parked from './iconMarker-parked.svg';

export function LeafletMap(props) {
  const { devices, loading, error, fetchDevicesProp } = props;

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
      {!loading && !error ? (
        <Map center={[47.3, 9.9]} zoom={9} style={{ height: '500px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {devices &&
            devices.map(device => {
              const coordinates = [device.latitude, device.longitude];
              return (
                <Marker
                  icon={device.isParked ? MapMarker(parked) : MapMarker(free)}
                  key={device.id}
                  position={coordinates}
                >
                  <Popup>
                    Last Updated At:{' '}
                    {new Date(device.updatedAt).toLocaleString()}
                  </Popup>
                </Marker>
              );
            })}
        </Map>
      ) : (
        ''
      )}
    </div>
  );
}

LeafletMap.propTypes = {
  devices: PropTypes.array,
  loading: PropTypes.bool,
  currDevice: PropTypes.number,
  error: PropTypes.any,
  fetchDevicesProp: PropTypes.func,
  buttonClickedProp: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  devices: makeSelectDevices(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchDevicesProp: () => dispatch(fetchDevices()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LeafletMap);
