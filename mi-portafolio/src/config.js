// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACvupPMt2e-lqJ2M_E3s-NEw6jd_CCHy4",
  authDomain: "portafolio-4f704.firebaseapp.com",
  databaseURL: "https://portafolio-4f704-default-rtdb.firebaseio.com",
  projectId: "portafolio-4f704",
  storageBucket: "portafolio-4f704.firebasestorage.app",
  messagingSenderId: "462721171390",
  appId: "1:462721171390:web:016a3de290923fd7f083ef"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar los servicios que necesites
export const db = getFirestore(app);