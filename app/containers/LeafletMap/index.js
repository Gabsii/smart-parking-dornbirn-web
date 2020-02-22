/**
 * LeafletMap
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { 
  makeSelectDevices, 
  makeSelectLoading, 
  makeSelectError 
} from './selectors';
import reducer from './reducer';
import { fetchDevices } from './actions';
import saga from './saga';
import messages from './messages';

export function LeafletMap(props) {
  const {devices, loading, error, fetchDevices } = props;
  
  useInjectReducer({ key: 'leafletMap', reducer });
  useInjectSaga({ key: 'leafletMap', saga });
  
  useEffect(() => {
    fetchDevices();
  });

  console.log('props', props);
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <br></br>
      { loading ? 'Loading' : '' }
      { !loading && !error ? 
        <Map center={[47.3, 9.9]} zoom={9} style={{height: '500px'}}>
          <TileLayer 
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
            { devices && devices.map((device)=> {
                let coordinates = [device.latitude, device.longitude];
                return (
                  <Marker key={device.id} position={coordinates}></Marker>
                ); 
            })}
        </Map>
        : ''
      }
    </div>
  );
}

LeafletMap.propTypes = {
  devices: PropTypes.array,
  loading: PropTypes.bool,
  currDevice: PropTypes.number,
  error: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  devices: makeSelectDevices(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchDevices: () => dispatch(fetchDevices())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LeafletMap);
