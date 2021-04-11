import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCT52OEwmzw1y8UX7Cl3imWkJD7nA9g6jo",
        authDomain: "facebook-messenger-clone-12343.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone.firebaseio.com",
        projectId: "facebook-messenger-clone-12343",
        storageBucket: "facebook-messenger-clone-12343.appspot.com",
        messagingSenderId: "144970420976",
        appId: "1:144970420976:web:40a117a0a76a69bd52e835",
        measurementId: "G-0742M9DWC4"

});

const db= firebaseApp.firestore();
export default  db ;