// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseapp=firebase.initializeApp({

        apiKey: "AIzaSyA6-_ki1yqz8F2Sesn7cLk6JISJsC9IUfc",
        authDomain: "instagram-clone-66cda.firebaseapp.com",
        projectId: "instagram-clone-66cda",
        storageBucket: "instagram-clone-66cda.appspot.com",
        // databaseURL:'https://instagramclone.firebase.com',
        messagingSenderId: "1037318257392",
        appId: "1:1037318257392:web:807de219fe94f83e36e035",
        measurementId: "G-YGKPZ3XNB0"
      

})

const db=firebase.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

export {db,auth,storage};

 