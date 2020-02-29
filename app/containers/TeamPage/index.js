/**
 *
 * TeamPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import H3 from 'components/H3';
import H2 from 'components/H2';
import H1 from 'components/H1';
import messages from './messages';
import Street from './Street';
import TeamMessage from './TeamMessage';
import TeamMessageWrapper from './TeamMessageWrapper';
import TeamImg from './TeamImg';
import Tire from './Tire';

import phil from '../../images/phil.jpg';
import edo from '../../images/edo.jpg';
import gabsi from '../../images/gabsi.jpg';
import chris from '../../images/chris.jpg';
import team from '../../images/undraw_team.svg';

const memberImages = [phil, edo, gabsi, chris];

export function TeamPage() {
  return (
    <div style={{ marginTop: '75px' }}>
      <Helmet>
        <title>Team</title>
        <meta
          name="description"
          content="As with project a team sticks together. Meet us, here!"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <TeamMessageWrapper>
        <Tire />
        <TeamMessage>
          <H2>
            <FormattedMessage {...messages.heading} />
          </H2>
        </TeamMessage>
        <TeamImg src={team} alt="team" />
      </TeamMessageWrapper>
      <Street />
      <Grid>
        {messages.team.map((member, index) => (
          <GridItem
            classname="flip"
            key={`${member[0]}-${index}`}
            src={memberImages[index]}
          >
            <H3>
              <FormattedMessage {...member[0]} />
            </H3>
            <p>
              <FormattedMessage {...member[1]} />
            </p>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}

TeamPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TeamPage);
