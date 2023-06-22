import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:"AIzaSyDFVvr2b1G7vNgS1yDoY3i1oqt0PFSWHVs",
  authDomain:"eshop-a61ac.firebaseapp.com",
  projectId:"eshop-a61ac",
  storageBucket:"eshop-a61ac.appspot.com",
  messagingSenderId:"812988639749",
  appId:"1:812988639749:web:885e443a8c3ce9479f0a6c",
  measurementId:"G-H680RNZVCW",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app);