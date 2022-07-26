import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBD6jZwn7JARuq0xnLkyGPWzPUOts0Ulfs",
    authDomain: "firecontact-app-e7617.firebaseapp.com",
    projectId: "firecontact-app-e7617",
    storageBucket: "firecontact-app-e7617.appspot.com",
    messagingSenderId: "1050445876218",
    appId: "1:1050445876218:web:9947cfea357ab30e88b243",
    databaseURL:"https://firecontact-app-e7617-default-rtdb.europe-west1.firebasedatabase.app/",
  };
  

  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);
