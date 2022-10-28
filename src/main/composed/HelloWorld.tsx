import HelloBase from './HelloBase';
import React from 'react';

const HelloWorld = ({ base = (e: React.ReactNode) => <HelloBase element={e}/> }) => {
  return base(<div>World!</div>);
};

export default HelloWorld;
