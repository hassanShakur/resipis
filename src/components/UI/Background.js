import React from 'react';

import homeBackImage from './../../images/background.jpg';
import aboutBackImage from './../../images/sec-background.jpg';

const Background = (props) => {
  const { children, page, className } = props;
  return (
    <div className={`background ${className}`}>
      <img
        id='back-img'
        src={page === 'home' ? homeBackImage : aboutBackImage}
        alt={`${page} background`}
      />
      {children}
    </div>
  );
};

export default Background;
