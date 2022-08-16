import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCwUeebuATpn_8VpFaQNvrUOFyp2TPmkOc",
    authDomain: "nextjs-react-blog.firebaseapp.com",
    projectId: "nextjs-react-blog",
    storageBucket: "nextjs-react-blog.appspot.com",
    messagingSenderId: "360019378756",
    appId: "1:360019378756:web:5835fd2c789ca9c6a33211",
    measurementId: "G-TDG9CCTPH4"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();