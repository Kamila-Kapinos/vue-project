import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBjVmkAMvb3Kj1mXJadjmcsrEIFZ-b3DQc',
  authDomain: 'live-chat-eecad.firebaseapp.com',
  projectId: 'live-chat-eecad',
  storageBucket: 'live-chat-eecad.appspot.com',
  messagingSenderId: '345709821162',
  appId: '1:345709821162:web:72848d621155eeb7916b93',
  measurementId: 'G-9NEQD6JS0D',
};

firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFirestore, timestamp, projectAuth };
