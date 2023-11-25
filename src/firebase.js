import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCRktWFincPbocAVyRdf5ED6FIqO9PojMY",
  authDomain: "slack-test-a04ec.firebaseapp.com",
  projectId: "slack-test-a04ec",
  storageBucket: "slack-test-a04ec.appspot.com",
  messagingSenderId: "174464382098",
  appId: "1:174464382098:web:71676f2733b7ef63dd224b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
