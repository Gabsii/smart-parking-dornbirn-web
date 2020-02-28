import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import Link from './Link';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Fragment>
      <svg
        style={{ position: 'relative', top: '75px' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#c1352e"
          fillOpacity="1"
          d="M0,128L60,112C120,96,240,64,360,85.3C480,107,600,181,720,202.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      <Wrapper>
        <section>
          <FormattedMessage {...messages.licenseMessage} />
        </section>
        <section>
          <LocaleToggle />
        </section>
        <section>
          <FormattedMessage
            {...messages.authorMessage}
            values={{
              author: <Link href="https://github.com/Gabsii">Gabsii</Link>,
            }}
          />
        </section>
      </Wrapper>
    </Fragment>
  );
}

export default Footer;
