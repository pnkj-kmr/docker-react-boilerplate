/*
 *  Locale
 *
 * This contains all the text for the component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'agrichian.common';

export default defineMessages({
  hello: {
    id: `${scope}.hello`,
    defaultMessage: 'Hello there!',
  },
});
