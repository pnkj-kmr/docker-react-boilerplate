import React from 'react';
import Msg from './Msg';
import locale from '../locale';

const Playground = () => {
  console.log('Playground component rendered...');
  return <Msg {...locale.hello} />;
};

export default Playground;
