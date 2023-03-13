import { useRef, useState } from 'react';

const useIsLoading = (isFetching = false, resultsArray) => {
  const [isLoading, setIsLoading] = useState(true);
  const loadedImages = useRef(0);

  const displayStyle = isLoading || isFetching ? 'none' : '';

  const imageLoadedHandler = () => {
    ++loadedImages.current;
    // console.log(loadedImages.current);
    if (resultsArray.length === loadedImages.current) {
      setIsLoading(() => false);
    }
    if (loadedImages.current > resultsArray.length) {
      setIsLoading(() => true);
      loadedImages.current =
        loadedImages.current - resultsArray.length;
    }
  };

  return [isLoading, imageLoadedHandler, displayStyle];
};

export default useIsLoading;
