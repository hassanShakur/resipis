// * ======= Third Party Components ======= */
import React from 'react';

const Container = (props) => {
  return (
    <div className={`${props.className} container`}>
      {props.children}
    </div>
  );
};

export default Container;
