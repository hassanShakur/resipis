import React from 'react';
import { BsUiChecksGrid } from 'react-icons/bs';
import CustomSkeleton from '../UI/CustomSkeleton';

const Equipment = ({ equipments, isLoading }) => {
  return isLoading ? (
    <CustomSkeleton />
  ) : (
    <div className='equipment'>
      <h3>Equipments</h3>
      <ul>
        {equipments?.map((equipment, id) => {
          const { name } = equipment;
          return isLoading ? (
            <CustomSkeleton />
          ) : (
            <li key={id}>
              <BsUiChecksGrid />
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Equipment;
