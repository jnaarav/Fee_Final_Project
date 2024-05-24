import {initializeApp, FirebaseApp} from "firebase/app";
import {getDatabase, Database} from "firebase/database"


const firebaseConfig = {
    apiKey: "AIzaSyDj6GsKcwER6FW0Q5iyTtgT5mo05Kx5cOU",
    authDomain: "final-evaluation-3476d.firebaseapp.com",
    projectId: "final-evaluation-3476d",
    storageBucket: "final-evaluation-3476d.appspot.com",
    messagingSenderId: "239518462862",
    appId: "1:239518462862:web:75e8746e15e955b7f2eadf"
};

export const FirebaseApplication: FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDatabase: Database = getDatabase(FirebaseApplication);
