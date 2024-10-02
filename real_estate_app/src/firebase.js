import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCE3Uf_OoajZ1QWjdUv40Jaep50wI79Ivw",
  authDomain: "real-estate-1bee9.firebaseapp.com",
  projectId: "real-estate-1bee9",
  storageBucket: "real-estate-1bee9.appspot.com",
  messagingSenderId: "129255791418",
  appId: "1:129255791418:web:304954dca38274ca1f4e03",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
