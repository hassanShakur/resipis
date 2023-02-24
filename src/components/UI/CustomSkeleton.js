import { Skeleton } from '@mui/material';
import React from 'react';

const CustomSkeleton = (props) => {
  return (
    <Skeleton
      variant={props.variant || 'rectangular'}
      width='100%'
      height='100%'
      animation='wave'
      sx={{ bgcolor: 'var(--section-back)' }}
    ></Skeleton>
  );
};

export default CustomSkeleton;
