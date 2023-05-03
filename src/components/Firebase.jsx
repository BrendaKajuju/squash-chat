import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({ 
  apiKey : "AIzaSyC0E-02TjWbHG-tjeQLZfhOHrTkMXCsQ8Q" , 
  authDomain : "squash-a7346.firebaseapp.com" , 
  projectId : "squash-a7346" , 
  storageBucket : "squash-a7346.appspot.com" , 
  messagingSenderId : "80246627901" , 
  appId : "1:80246627901:web:5afcd6858b2f7a8ff91454" 
}).auth();