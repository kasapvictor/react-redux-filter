import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Card, Stack, Badge } from '../../components';

import { selectPositionById } from './PositionsSlice';

export const Position = ({ positionId }) => {
  const positionItem = useSelector((state) => selectPositionById(state, positionId));
  const {
    id,
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    handleAddFilter,
  } = positionItem;
  const badges = [role, level, ...languages, ...tools];

  // console.log('badges', badges);

  return (
    <Card isFeatured={featured}>
      <div className="job-position">
        <div className="job-position-info">
          <img className="job-position-avatar" src={logo} alt={company} />
          <div className="job-position-body">
            <div className="job-postion-company">
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  {isNew && (
                    <Badge variant="rounded" colorScheme="primary">
                      NEW!
                    </Badge>
                  )}
                  {featured && (
                    <Badge variant="rounded" colorScheme="dark">
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className="job-position-title">{position}</h2>
            <Stack>
              <div className="job-position-meta">{postedAt}</div>
              <div className="job-position-meta">{contract}</div>
              <div className="job-position-meta">{location}</div>
            </Stack>
          </div>
        </div>
        <Stack>
          {badges.map((item) => (
            <Badge key={item} onClick={() => handleAddFilter(item)}>
              {item}
            </Badge>
          ))}
        </Stack>
      </div>
    </Card>
  );
};

Position.propTypes = {
  positionId: PropTypes.number,
};
