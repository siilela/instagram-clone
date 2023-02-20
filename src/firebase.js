
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyDKoH5yXeVsuwf0EfIkAH7K8RX2GtthrOM",
  authDomain: "instagram-clone-50095.firebaseapp.com",
  databaseURL: "https://instagram-clone-50095-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-50095",
  storageBucket: "instagram-clone-50095.appspot.com",
  messagingSenderId: "823331708328",
  appId: "1:823331708328:web:dbd20e53657944203f519d",
  measurementId: "G-JFG26LYR7F",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage=firebase.storage();

export { auth, db,storage };
