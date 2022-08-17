import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { RemoveIcon } from '../icons';
import { addedFilteredPositions } from '../features/positions/PositionsSlice';

export const Badge = ({ variant = 'basic', colorScheme = 'light', children }) => {
  const dispatch = useDispatch();

  const handleFilter = (item) => () => {
    dispatch(addedFilteredPositions(item));
  };

  const handleClear = (item) => () => {
    console.log('handleClear', item);
  };

  return (
    <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={handleFilter(children)}>
      <span>{children}</span>
      {variant === 'clearable' && (
        <div className="badge-remover" onClick={handleClear(children)}>
          <RemoveIcon />
        </div>
      )}
    </div>
  );
};

Badge.propTypes = {
  variant: PropTypes.oneOf(['basic', 'clearable', 'rounded']),
  colorScheme: PropTypes.oneOf(['light', 'primary', 'dark']),
  children: PropTypes.node.isRequired,
  onClear: PropTypes.func,
  onClick: PropTypes.func,
};
