import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFFm-b68cTs852FSDkNa28QrwTx1_U_0Q",
    authDomain: "tshirtapp-30eef.firebaseapp.com",
    databaseURL: "https://tshirtapp-30eef.firebaseio.com",
    projectId: "tshirtapp-30eef",
    storageBucket: "tshirtapp-30eef.appspot.com",
    messagingSenderId: "522313311182",
    appId: "1:522313311182:web:615aa62ea092b4899c019f",
    measurementId: "G-S8F35H9Y84"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const storage = firebase.storage();

  export { storage, firebase as default }