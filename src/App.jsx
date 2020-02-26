/**
 * App.js
 *
 * Entry point of applicaiton.
 *
 */
import React from 'react';
import GlobalStyle from './utility/styles';
import Playground from './apps/common/components/Playground';

const App = () => (
  <React.Fragment>
    <Playground />
    <GlobalStyle />
  </React.Fragment>
);

export default App;
