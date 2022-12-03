import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "adekunle-68dab.firebaseapp.com",
  projectId: "adekunle-68dab",
  storageBucket: "adekunle-68dab.appspot.com",
  messagingSenderId: "171538041773",
  appId: process.env.FIREBASE_APP_ID,
  databaseURL: "https://adekunle-68dab-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export function addEnquiry(name: string, email: string, message: string) {
  const database = getDatabase(app);
  set(ref(database, "/enquiries/" + name + "/"), {
    name: name,
    email: email,
    message: message,
  })
    .then((response) => {
      // console.log("res---", response);
    })
    .catch((err) => {
      // console.log("err---", err);
    });
}
