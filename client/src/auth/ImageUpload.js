import React, { useEffect, useRef, useState } from 'react';

const ImageUpload = ({ file, setFile }) => {
  const filePicker = useRef();
  const [previewUrl, setPreviewUrl] = useState('');

  const imagePickedHandler = (e) => {
    if (e.target.files && e.target.files.length === 1) {
      setFile(() => e.target.files[0]);
    }
  };

  useEffect(() => {
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPreviewUrl(() => fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickImageHandler = () => {
    filePicker.current.click();
  };
  return (
    <div id='image-upload'>
      <div className='image' onClick={pickImageHandler}>
        {previewUrl && <img src={previewUrl} alt='user' />}
        {!previewUrl && <p>Pick avatar</p>}
      </div>
      <input
        ref={filePicker}
        type='file'
        name='avatar'
        id='avatar'
        accept='.jpeg, .jpg, .png'
        onChange={imagePickedHandler}
        style={{ display: 'none' }}
      />
      <button
        type='button'
        className='pick'
        onClick={pickImageHandler}
      >
        Pick image
      </button>
    </div>
  );
};

export default ImageUpload;
