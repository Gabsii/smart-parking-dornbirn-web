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
import StatusIndicator from './StatusIndicator';
import Wrapper from './Wrapper';
import ButtonGroup from './ButtonGroup';

import directions from './directions.svg';
import DeviceStatus from './DeviceStatus';

export function DeviceInfo(props) {
  const { device } = props;
  const { isParked, latitude, longitude, deviceId, updatedAt } = device;

  if (Object.keys(device).length === 0) return null;

  return (
    <Wrapper id="device-info">
      {/* <FormattedMessage {...messages.header} /> */}
      <DeviceStatus>
        <H2>
          Device: {deviceId}
          <StatusIndicator isParked={isParked} />
        </H2>
        <div>Status: {isParked ? 'occupied' : 'free'}</div>
        <div>
          {isParked
            ? `Last Updated At: ${new Date(updatedAt).toLocaleString()}`
            : ''}
        </div>
        <div>Address: TBD</div>
      </DeviceStatus>
      <ButtonGroup>
        <Button
          href={`https://www.google.at/maps/dir//${latitude},${longitude}`}
          target="_blank"
        >
          <Img src={directions} alt="Directions" />
          Google Maps
        </Button>
        <Button disabled>Reserve (TBD)</Button>
      </ButtonGroup>
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
