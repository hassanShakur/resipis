import React from 'react';
import { BsUiChecksGrid } from 'react-icons/bs';

const Equipment = ({ equipments }) => {
  return (
    <div className='equipment'>
      <h3>Equipments</h3>
      <ul>
        {equipments?.map((equipment, id) => {
          const { name } = equipment;
          return (
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
