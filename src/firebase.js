import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf_8e29ecmA9WIiTxh_K2pvdA3sNU7JNg",
  authDomain: "teander-4bb39.firebaseapp.com",
  projectId: "teander-4bb39",
  storageBucket: "teander-4bb39.appspot.com",
  messagingSenderId: "81033771856",
  appId: "1:81033771856:web:03e0d5854b14cd2d49ca55",
  measurementId: "G-0Y1T6F902R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
