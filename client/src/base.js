import firebase from "firebase";
import 'firebase/storage';

export const app = firebase.initializeApp({
  "projectId": "michael-scales-portfolio",
  "appId": "1:35395102019:web:fd492bdc1a728bed82bbf6",
  "databaseURL": "https://michael-scales-portfolio-default-rtdb.firebaseio.com",
  "storageBucket": "michael-scales-portfolio.appspot.com",
  "locationId": "us-west2",
  "apiKey": window.env.FIREBASE_API_KEY,
  "authDomain": "michael-scales-portfolio.firebaseapp.com",
  "messagingSenderId": "35395102019"
});

