import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCPccRYBo1NWws1_3m1_53lg74QCiZ-yPI",
    authDomain: "squash-chat-24ddb.firebaseapp.com",
    projectId: "squash-chat-24ddb",
    storageBucket: "squash-chat-24ddb.appspot.com",
    messagingSenderId: "566127988388",
    appId: "1:566127988388:web:fd639f51159170dd486031"
  }).auth();