/**
 *
 * DeviceInfo
 *
 */

import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import L from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';

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
  const [address, setAddress] = useState();

  useEffect(() => {
    if ((latitude, longitude)) {
      const geocontrol = new ELG.ReverseGeocode();
      geocontrol
        .latlng(new L.LatLng(latitude, longitude))
        .run((error, result) => {
          if (error) {
            return;
          }
          setAddress(result.address.Match_addr);
        });
    }
  });

  if (Object.keys(device).length === 0) return null;

  return (
    <Wrapper id="device-info">
      <DeviceStatus>
        <H2>
          <FormattedMessage
            {...messages.device}
            values={{
              device: deviceId,
            }}
          />
          <StatusIndicator isParked={isParked} />
        </H2>
        <div>
          {isParked ? (
            <FormattedMessage {...messages.status_occupied} />
          ) : (
            <FormattedMessage {...messages.status_free} />
          )}
        </div>
        <div>
          {isParked ? (
            <Fragment>
              <FormattedMessage {...messages.updated} />
              <FormattedDate
                value={updatedAt}
                day="numeric"
                month="numeric"
                year="numeric"
                hour="numeric"
                minute="numeric"
                seconds="numeric"
              />
            </Fragment>
          ) : (
            ''
          )}
        </div>
        <div>
          <FormattedMessage
            {...messages.address}
            values={{
              address,
            }}
          />
        </div>
        <div style={{ fontSize: '12px', marginTop: '5px' }}>
          <FormattedMessage {...messages.reservation_notice} />
        </div>
      </DeviceStatus>
      <ButtonGroup>
        <Button
          href={`https://www.google.at/maps/dir//${latitude},${longitude}`}
          target="_blank"
        >
          <Img
            style={{ marginRight: '10px' }}
            src={directions}
            alt="Directions"
          />
          Google Maps
        </Button>
        <Button disabled>
          <FormattedMessage {...messages.reserve} />
        </Button>
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
