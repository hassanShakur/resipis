// * ======= Third Party Components ======= */
import React from 'react';
import { BsUiChecksGrid } from 'react-icons/bs';

//? ======== Local Components ========== */
import CustomSkeleton from '../UI/CustomSkeleton';

const Equipment = ({ equipments, isLoading }) => {
  const uniqueEqupsArray = Array.from(
    new Set(equipments?.map((eq) => eq.name))
  );

  return isLoading ? (
    <CustomSkeleton />
  ) : (
    <div className='equipment'>
      <h3>Equipments</h3>
      <ul>
        {uniqueEqupsArray?.map((equipment, id) => {
          return isLoading ? (
            <CustomSkeleton />
          ) : (
            <li key={id}>
              <BsUiChecksGrid />
              {equipment}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Equipment;
