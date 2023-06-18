
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDnFGCfpLcjgo-2tCDKWw25E_k6NMKeAXo",
  authDomain: "todo-cfb72.firebaseapp.com",
  projectId: "todo-cfb72",
  storageBucket: "todo-cfb72.appspot.com",
  messagingSenderId: "677279642197",
  appId: "1:677279642197:web:4715b189b7fbfb525b1adc",
  measurementId: "G-M30VHVX5K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider};