import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyCQcve8CDUArB_Beji0wer8ekDVmlo-L4Q",
  authDomain: "loglife-761bf.firebaseapp.com",
  databaseURL: "https://loglife-761bf-default-rtdb.firebaseio.com",
  projectId: "loglife-761bf",
  storageBucket: "loglife-761bf.appspot.com",
  messagingSenderId: "765113364918",
  appId: "1:765113364918:web:4a6ee93f2d997fdb9a1117"

}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database();

export { firebase, auth, database };