import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLnj8WFtz7mxPeBdiQhuka8spuOaahlIo",
  authDomain: "facebookclonebydhawal.firebaseapp.com",
  projectId: "facebookclonebydhawal",
  storageBucket: "facebookclonebydhawal.appspot.com",
  messagingSenderId: "638436205226",
  appId: "1:638436205226:web:8d7e2e7384b659a533a6d3",
  measurementId: "G-YDBQM2VN8L"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;