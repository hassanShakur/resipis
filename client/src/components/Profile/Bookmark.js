import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';

const Bookmark = ({ imageLoadedHandler, bookmark }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { title, image, cookTime, prepTime, id } = bookmark;
  const time = cookTime === -1 ? prepTime : cookTime + prepTime;

  const handleBookmarkClick = () => {
    navigate(`${pathname}/${id}`);
  };

  return (
    <div className='bookmark' onClick={handleBookmarkClick}>
      <img src={image} alt={title} onLoad={imageLoadedHandler} />
      <div className='description'>
        <h5 className='name'>{title}</h5>
        <span className='time'>
          <p>Ready in</p>
          <div>
            <AiOutlineClockCircle />
            <h5>{time} mins</h5>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Bookmark;
