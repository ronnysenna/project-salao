// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9k5HyVea3v_pF5PXXdMVkQ5wdldPFfKc",
  authDomain: "agenda-salao-236b5.firebaseapp.com",
  projectId: "agenda-salao-236b5",
  storageBucket: "agenda-salao-236b5.appspot.com",
  messagingSenderId: "217875372845",
  appId: "1:217875372845:web:3ef996fb21f39fb2a951a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
