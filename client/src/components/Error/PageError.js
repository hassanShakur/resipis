import React from 'react';

import { TbError404 } from 'react-icons/tb';

const PageError = () => {
  return (
    <div className='page-error'>
      <TbError404 className='icon' />
      <h3>page not found</h3>
      <p>Please recheck to confirm the input url is correct!</p>
    </div>
  );
};

export default PageError;
