import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJrQWy6mUXKP_VX4aqe8t_md92g3HEOfo",
  authDomain: "hahnsoftware-project.firebaseapp.com",
  projectId: "hahnsoftware-project",
  storageBucket: "hahnsoftware-project.appspot.com",
  messagingSenderId: "285079860755",
  appId: "1:285079860755:web:4907501e0c53ce70c131e6",
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { db, auth };
