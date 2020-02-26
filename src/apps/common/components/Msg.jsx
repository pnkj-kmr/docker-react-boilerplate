/**
 * Msg
 *
 * Component helps to represent the language text on web.
 */

import React from 'react';
import P from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Msg = props => <FormattedMessage {...props} />;

Msg.propTypes = {
  id: P.string.isRequired,
  defaultMessage: P.string,
};

export default Msg;
