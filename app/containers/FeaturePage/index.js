/*
 * FeaturePage
 *
 * List all the features
 */
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import LeafletMap from 'containers/LeafletMap';
import DeviceInfo from 'containers/DeviceInfo';
import messages from './messages';

export default function FeaturePage() {
  return (
    <Fragment>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <div style={{ marginTop: '75px', minHeight: '500px' }}>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <DeviceInfo />
        <LeafletMap />
      </div>
    </Fragment>
  );
}
