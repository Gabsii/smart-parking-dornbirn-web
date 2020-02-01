/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import H2 from 'components/H2';
import H3 from 'components/H3';
import CenteredH2 from './CenteredH2';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import CenteredSection from './CenteredSection';
import messages from './messages';

export function HomePage() {

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <CenteredSection>
          <CenteredH2>
            <FormattedMessage {...messages.useCasesHeader} />
          </CenteredH2>
          <Grid>
            {/* TODO: add localization */}
            <GridItem className="flip" src="https://picsum.photos/200/220" alt="alt">
              <H3>Test</H3>
              <p>StyledCard</p>
            </GridItem>
            <GridItem className="flip" src="https://picsum.photos/200/221" alt="alt">
              <H3>Test</H3>
              <p>Stylesard</p>
            </GridItem>
            <GridItem className="flip" src="https://picsum.photos/200/222" alt="alt">
              <H3>Test</H3>
              <p>Stylesard</p>
            </GridItem>
            <GridItem className="flip" src="https://picsum.photos/200/223" alt="alt">
              <H3>Test</H3>
              <p>StyledCard</p>
            </GridItem>
            <GridItem className="flip" src="https://picsum.photos/200/224" alt="alt">
              <H3>Test</H3>
              <p>Stylesard</p>
            </GridItem>
            <GridItem className="flip" src="https://picsum.photos/200/225" alt="alt">
              <H3>Test</H3>
              <p>Stylesard</p>
            </GridItem>
          </Grid>
        </CenteredSection>
      </div>
    </article>
  );
}


export default compose(
  memo,
)(HomePage);
