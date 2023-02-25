// * ======= Third Party Components ======= */
import React from 'react';

//? ======== Local Components ========== */
import CustomSkeleton from '../UI/CustomSkeleton';

const Video = ({ video, image, isLoading }) => {
  let videoContent;
  if (video?.id) {
    videoContent = (
      <iframe
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${video.id}`}
        title={`${video.title}`}
        frameborder='0'
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
    );
  } else {
    videoContent = <img src={image} alt={image} />;
  }

  return isLoading ? (
    <CustomSkeleton />
  ) : (
    <div className='video'>{videoContent}</div>
  );
};

export default Video;
