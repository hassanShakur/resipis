// * ======= Third Party Components ======= */
import React from 'react';

//? ======== Local Components ========== */
import CustomSkeleton from '../../UI/CustomSkeleton';
import basicNutrition from '../../../utils/basicNutrition';

const Nutrition = ({ isLoading, nutrition }) => {
  const basics = nutrition?.filter((nut) =>
    basicNutrition.includes(nut.name)
  );

  return isLoading ? (
    <CustomSkeleton />
  ) : (
    <div className='nutrition'>
      <h3>Nutrition facts</h3>
      {/* <span>
        <p>per serving</p>
      </span> */}
      <div className='details'>
        {basics?.map((el, id) => (
          <div key={id}>
            <h4>
              {Math.round(el.amount)}
              {el.unit}
            </h4>
            <p>{el.name === 'Carbohydrates' ? 'Carbs' : el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nutrition;
