import React from 'react';

interface Props {
  element: React.ReactNode
}

const HelloBase = ({ element }: Props) => (
  <div>
    <h3>Composed Page</h3>
    <div>Hello,</div>
    {element}
  </div>
);

export default HelloBase;
