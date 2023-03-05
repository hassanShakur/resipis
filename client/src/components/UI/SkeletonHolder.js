import React from 'react';
import _ from 'lodash';
import { Skeleton } from '@mui/material';

const SkeletonHolder = ({ limit }) => {
  return (
    <div className='skeleton'>
      {_.range(limit || 4).map((_, id) => {
        return (
          <div key={id}>
            <Skeleton
              variant='rounded'
              width='16vw'
              height='22vh'
              animation='wave'
              sx={{ bgcolor: 'var(--section-back)' }}
            />

            <Skeleton
              variant='text'
              width='16vw'
              height='6vh'
              animation='wave'
              sx={{ bgcolor: 'var(--section-back)' }}
            />

            <Skeleton
              variant='text'
              width='13vw'
              height='4vh'
              animation='wave'
              sx={{ bgcolor: 'var(--section-back)' }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SkeletonHolder;
