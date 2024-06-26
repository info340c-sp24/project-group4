import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    setPersistence, 
    browserLocalPersistence 
} from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCJecsgFIEpXuwgA2XxJlEyXyHKiCMky0U",
    authDomain: "info340group4.firebaseapp.com",
    projectId: "info340group4",
    storageBucket: "info340group4.appspot.com",
    messagingSenderId: "537230453274",
    appId: "1:537230453274:web:31d4ba760265319810bfa3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

const database = getDatabase(app);

export { auth, database, createUserWithEmailAndPassword, signInWithEmailAndPassword, ref, set, onValue, onAuthStateChanged };