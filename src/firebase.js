import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW6GPJdT_sqVF7BpADGj5aP1x6IbCbM3Y",
  authDomain: "movieapp31-d8a5d.firebaseapp.com",
  projectId: "movieapp31-d8a5d",
  storageBucket: "movieapp31-d8a5d.appspot.com",
  messagingSenderId: "1034650893061",
  appId: "1:1034650893061:web:2065c1142bd5ec2be8556c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};