import HelloBase from './HelloBase';
import React from 'react';

const HelloYou = ({ base = (e: React.ReactNode) => <HelloBase element={e}/> }) => {
  return base(<text>You!</text>);
};

export default HelloYou;
