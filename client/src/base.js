import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const config = {
  "projectId": "michael-scales-portfolio",
  "appId": "1:35395102019:web:fd492bdc1a728bed82bbf6",
  "databaseURL": "https://michael-scales-portfolio-default-rtdb.firebaseio.com",
  "storageBucket": "michael-scales-portfolio.appspot.com",
  "locationId": "us-west2",
  "apiKey": window.env.FIREBASE_API_KEY,
  "authDomain": "michael-scales-portfolio.firebaseapp.com",
  "messagingSenderId": "35395102019"
};

export const app = initializeApp(config);
export const db = getFirestore(app);
export const storage = getStorage(app);

// async function getImages(db) {
//   const imagesCol = collection(db, 'image');
//   const imageSnapshot = await getDocs(imagesCol);
//   const imagesList = imageSnapshot.docs.map(doc => doc.data());
//   return imagesList;

// }
// getImages(db)

// export const db = getFirestore()
// export const db = firebase.firestore()