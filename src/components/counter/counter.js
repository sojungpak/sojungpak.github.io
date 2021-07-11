import React from 'react';

import CountText from './countText';
import Controls from './controls';

const Counter = (props) => {
  return (
    <div>
      <CountText />
      <Controls />
    </div>
  );
};

export default Counter;
