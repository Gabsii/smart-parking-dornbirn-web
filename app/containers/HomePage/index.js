/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { compose } from 'redux';

import H1 from 'components/H1';
import H3 from 'components/H3';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import home from 'images/undraw_home.svg';
import CenteredH2 from './CenteredH2';
import CenteredSection from './CenteredSection';
import Hero from './Hero';
import HeroImg from './HeroImg';
import HeroMessage from './HeroMessage';
import messages from './messages';

export function HomePage() {
  const title =
    window.innerWidth > 420
      ? messages.startProjectHeader
      : messages.startProjectHeader2;

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div style={{ marginTop: '50px' }}>
        <CenteredSection>
          <Hero>
            <HeroMessage>
              <H1>
                <FormattedMessage {...title} />
              </H1>
              <FormattedHTMLMessage {...messages.startProjectMessage} />
            </HeroMessage>
            <HeroImg src={home} alt="Girl next to car"/>
          </Hero>
        </CenteredSection>
        <CenteredSection>
          <CenteredH2>
            <FormattedMessage {...messages.useCasesHeader} />
          </CenteredH2>
          <Grid>
            {messages.useCases.map((useCase, index) => (
              <GridItem
                classname="flip"
                key={`${useCase[0]}-${index}`}
                src={`https://picsum.photos/200/22${index}`}
              >
                <H3>
                  <FormattedMessage {...useCase[0]} />
                </H3>
                <p>
                  <FormattedMessage {...useCase[1]} />
                </p>
              </GridItem>
            ))}
          </Grid>
        </CenteredSection>
      </div>
    </article>
  );
}

export default compose(memo)(HomePage);
