import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database"; 
// import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBPuCGRWtGfqT_ytuy9_ufbKdNpJ4xTHC0",
  authDomain: "photogram-18fe9.firebaseapp.com",
  databaseURL: "https://photogram-18fe9-default-rtdb.firebaseio.com/",
  projectId: "photogram-18fe9",
  storageBucket: "photogram-18fe9.appspot.com",
  messagingSenderId: "543089938533",
  appId: "1:543089938533:web:451010292d0d461bd1368c",
  measurementId: "G-21P1DGHT77"
};

const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const database = getDatabase(app);

export {projectStorage,database};
