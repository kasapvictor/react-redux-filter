import React from 'react';
import PropTypes from 'prop-types';

export const Stack = ({ children, position }) => {
  return (
    <div
      className="stack"
      style={{
        justifyContent: position === 'center' ? 'center' : `flex-${position}`,
      }}>
      {children}
    </div>
  );
};

Stack.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
};
