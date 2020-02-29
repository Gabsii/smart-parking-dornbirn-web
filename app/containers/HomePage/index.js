/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { compose } from 'redux';

import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Img from 'components/Img';

import home from 'images/undraw_home.svg';
import restaurant from 'images/undraw_restaurant.svg';
import electricCar from 'images/undraw_electric_car.svg';
import judge from 'images/undraw_judge.svg';

import CTA from './CTA';
import CenteredH2 from './CenteredH2';
import CenteredSection from './CenteredSection';
import Hero from './Hero';
import HeroImg from './HeroImg';
import HeroMessage from './HeroMessage';
import messages from './messages';
import UseCase from './UseCase';

const useCaseImages = [electricCar, restaurant, judge];

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
            <HeroImg src={home} alt="Girl next to car" />
            <FormattedMessage {...messages.demo}>
              {txt => (
                <CTA
                  href={`mailto:lukas.gabsi@gmail.com?subject=${encodeURIComponent(
                    `Smart Parking - ${txt}`,
                  )}`}
                >
                  {txt}
                </CTA>
              )}
            </FormattedMessage>
          </Hero>
        </CenteredSection>
        <CenteredSection>
          <FormattedMessage {...messages.useCasesHeader}>
            {txt => <CenteredH2>{txt}</CenteredH2>}
          </FormattedMessage>
          <div>
            {messages.useCases.map((useCase, index) => (
              <UseCase key={`${useCase[0]}-${index}`} even={!(index % 2)}>
                <div>
                  <H2>
                    <FormattedMessage {...useCase[0]} />
                  </H2>
                  <p style={{ padding: '0 3em' }}>
                    <FormattedMessage {...useCase[1]} />
                  </p>
                </div>
                <Img src={useCaseImages[index]} alt="Use Case Image" />
              </UseCase>
            ))}
          </div>
        </CenteredSection>
      </div>
    </article>
  );
}

export default compose(memo)(HomePage);
