import firebase from 'firebase'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZYu_Lb7SaPmdsZqGIPjCNMkb2VyYlDOk",
  authDomain: "ikea-clone-8d049.firebaseapp.com",
  databaseURL: "https://ikea-clone-8d049.firebaseio.com",
  projectId: "ikea-clone-8d049",
  storageBucket: "ikea-clone-8d049.appspot.com",
  messagingSenderId: "700019070549",
  appId: "1:700019070549:web:3dbc21d4d596046efae6dc",
  measurementId: "G-WN51DFTLPM"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };