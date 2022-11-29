import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDY653RzOsY3StcI_zeInzLSJKB9eUE_A",
  authDomain: "adekunle-68dab.firebaseapp.com",
  projectId: "adekunle-68dab",
  storageBucket: "adekunle-68dab.appspot.com",
  messagingSenderId: "171538041773",
  appId: "1:171538041773:web:5cd39efe8703fd8834af24",
  //   databaseURL: "https://dev-enquiries.firebaseio.com",
  databaseURL: "https://adekunle-68dab-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export function addEnquiry(name: string, email: string, message: string) {
  const database = getDatabase(app);
  console.log("ref----", ref(database));
  set(ref(database, "/enquiries/"), {
    name: name,
    email: email,
    message: message,
  })
    .then((response) => {
      console.log("res---", response);
    })
    .catch((err) => {
      console.log("err---", err);
    });
}
