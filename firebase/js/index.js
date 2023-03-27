
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore, addDoc, collection, deleteDoc, query, where, getDocs, doc } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAk8MIDNztqEPZaFDONW0Jh-XV0sn-yBXc",
    authDomain: "fir-test-3a67f.firebaseapp.com",
    projectId: "fir-test-3a67f",
    storageBucket: "fir-test-3a67f.appspot.com",
    messagingSenderId: "581475555346",
    appId: "1:581475555346:web:67aa0f22bef03586f1e0cb"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore();


const uyQuery = query(collection(db, "elever"), where("fornavn", "==", "uy"))

const uyDocs = await getDocs(uyQuery)

uyDocs.forEach(async (x) => {
    await deleteDoc(
        doc(db, "elever", x.id)
    )
})

