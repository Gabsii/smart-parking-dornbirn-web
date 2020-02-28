/*
 * DeviceInfo Messages
 *
 * This contains all the text for the DeviceInfo container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.DeviceInfo';

export default defineMessages({
  device: {
    id: `${scope}.device`,
    defaultMessage: 'Gerät',
  },
  status_occupied: {
    id: `${scope}.status_occupied`,
    defaultMessage: 'Status',
  },
  status_free: {
    id: `${scope}.status_free`,
    defaultMessage: 'Status',
  },
  updated: {
    id: `${scope}.updated`,
    defaultMessage: 'Updated: ',
  },
  address: {
    id: `${scope}.address`,
    defaultMessage: 'Address',
  },
  reserve: {
    id: `${scope}.reserve`,
    defaultMessage: 'Reserve (TBD)',
  },
  reservation_notice: {
    id: `${scope}.reservation_notice`,
    defaultMessage: 'Reserve (TBD)',
  },
});
