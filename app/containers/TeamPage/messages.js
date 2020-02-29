/*
 * TeamPage Messages
 *
 * This contains all the text for the TeamPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.TeamPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Team',
  },
  heading: {
    id: `${scope}.heading`,
    defaultMessage: 'These idiots made it!',
  },
  team: [
    [
      {
        id: `${scope}.team.1.header`,
        defaultMessage: 'Team Member Header',
      },
      {
        id: `${scope}.team.1.message`,
        defaultMessage: 'Team Member Message',
      },
    ],
    [
      {
        id: `${scope}.team.2.header`,
        defaultMessage: 'Team Member Header',
      },
      {
        id: `${scope}.team.2.message`,
        defaultMessage: 'Team Member Message',
      },
    ],
    [
      {
        id: `${scope}.team.3.header`,
        defaultMessage: 'Team Member Header',
      },
      {
        id: `${scope}.team.3.message`,
        defaultMessage: 'Team Member Message',
      },
    ],
    [
      {
        id: `${scope}.team.4.header`,
        defaultMessage: 'Team Member Header',
      },
      {
        id: `${scope}.team.4.message`,
        defaultMessage: 'Team Member Message',
      },
    ],
  ],
});
