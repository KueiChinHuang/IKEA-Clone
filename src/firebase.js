import firebase from 'firebase'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7dosGMedjjGfDSsNA21wUgfyfdDALfQo",
  authDomain: "ikea-clone-5327a.firebaseapp.com",
  databaseURL: "https://ikea-clone-5327a.firebaseio.com",
  projectId: "ikea-clone-5327a",
  storageBucket: "ikea-clone-5327a.appspot.com",
  messagingSenderId: "687551606949",
  appId: "1:687551606949:web:10044dbd5cf46fb6305d4c",
  measurementId: "G-M4TXMLNMY7"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };