/**
 *
 * DeviceInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import H2 from 'components/H2';
import Img from 'components/Img';
import { makeSelectCurrentDevice } from '../LeafletMap/selectors';
import messages from './messages';
import Button from './Button';
import Link from './Link';
import Wrapper from './Wrapper';
import DeviceStatus from './DeviceStatus';

import directions from './directions.svg';

export function DeviceInfo(props) {
  const { device } = props;

  if (Object.keys(device).length === 0) return null;

  return (
    <Wrapper>
      {/* <FormattedMessage {...messages.header} /> */}
      <DeviceStatus>
        <H2>Device: {device.deviceId}</H2>
        {/* <span>Lat: {device.latitude}</span>
        <span style={{marginLeft: '5px'}}>Long: {device.longitude}</span> */}
        <div>Status: {device.isParked ? 'occupied' : 'free'}</div>
        <div>
          {device.isParked
            ? `Last Updated At: ${new Date(device.updatedAt).toLocaleString()}`
            : ''}
        </div>
        <div>Address: TBD</div>
      </DeviceStatus>
      <Button>
        <Img src={directions} alt="Directions" />
        <Link
          href={`https://www.google.at/maps/dir//${device.latitude},${
            device.longitude
          }`}
        >
          Google Maps
        </Link>
      </Button>
    </Wrapper>
  );
}

DeviceInfo.propTypes = {
  device: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  device: makeSelectCurrentDevice(),
});

const withConnect = connect(
  mapStateToProps,
  {},
);

export default compose(withConnect)(DeviceInfo);
