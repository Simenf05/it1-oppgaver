const rootEl = document.getElementById("root");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore, doc, collection, query, getDocs } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC0SkaBfsNwmiq4Gmcabn49Po0ouZIJ1M8",
    authDomain: "chatdatabase-7a4a4.firebaseapp.com",
    projectId: "chatdatabase-7a4a4",
    storageBucket: "chatdatabase-7a4a4.appspot.com",
    messagingSenderId: "795226099203",
    appId: "1:795226099203:web:75c2bb625f097c4a2c8836"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const chatRef = collection(db, "chatDB")





function showMSG(json) {

    const divEl = document.createElement("div")
    divEl.className = "chatDiv"

    const navnEl = document.createElement("p")
    navnEl.innerHTML = `${json.data().avsender}: `

    divEl.appendChild(navnEl)

    const txtEl = document.createElement("p")
    txtEl.innerHTML = json.data().melding

    divEl.appendChild(txtEl)

    rootEl.appendChild(divEl)


}

const noe = await getDocs(chatRef)

noe.forEach(document => {
    showMSG(document)
})


