import { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from '../../firebase';
import PropTypes from 'prop-types';

const ImageUploader = ({ setValue }) => {
  const [image, setImage] = useState(null);
  const [isImageRequired, setIsImageRequired] = useState(true);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setIsImageRequired(false);
    }
  };

  const handleUpload = () => {
    if (!image) {
      return;
    }
    const storage = getStorage(app);
    const storageRef = ref(storage, `images/${image.name}`);

    uploadBytes(storageRef, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadUrl) => {
          setValue('place.image_url', downloadUrl);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Execute handleUpload every time the image change.
  useEffect(() => {
    handleUpload();
  }, [image]);

  return (
    <div className="flex flex-col gap-1 w-64 md:w-80">
      {isImageRequired && <h3 className="text-white font-semibold text-center">Upload an image</h3>}
      <input
        type="file"
        onChange={handleImageChange}
        className="w-full forms-inputs bg-turquoise-blue"
        required
      />
      
    </div>
  );
};

ImageUploader.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default ImageUploader;
