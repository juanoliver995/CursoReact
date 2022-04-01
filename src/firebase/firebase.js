import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCWnx1yFx_mj1LukpzlZQ8127pHgubi2Lo",
    authDomain: "free-market-coderhouse.firebaseapp.com",
    projectId: "free-market-coderhouse",
    storageBucket: "free-market-coderhouse.appspot.com",
    messagingSenderId: "527084733031",
    appId: "1:527084733031:web:1501f37d75b5630ed30ac2"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
