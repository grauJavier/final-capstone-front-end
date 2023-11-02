import { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from '../firebase'; // Asegúrate de importar la instancia de la aplicación de Firebase también
import PropTypes from 'prop-types';

const ImageUploader = ({ setValue }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const storage = getStorage(app);
    const storageRef = ref(storage, `images/${image.name}`);
    
    uploadBytes(storageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadUrl) => {
        setValue("place.image_url", downloadUrl);
        // Hacer lo que quieras con la URL de la imagen, por ejemplo, mostrarla en tu interfaz de usuario.
      });
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Subir Imagen</button>
    </div>
  );
};

ImageUploader.propTypes = {
  setValue: PropTypes.func.isRequired,
}

export default ImageUploader;
