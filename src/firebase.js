// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCRXy_IzEa2kCT0oUI1363xl3LPlcwKt3c',
  authDomain: 'renteaze-2c8b3.firebaseapp.com',
  projectId: 'renteaze-2c8b3',
  storageBucket: 'renteaze-2c8b3.appspot.com',
  messagingSenderId: '262484741520',
  appId: '1:262484741520:web:90490aea0738cef5597715'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app as default };
