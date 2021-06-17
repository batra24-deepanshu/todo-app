// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBFC2IyVKSoVccWv4iQOE-pS95kRIoQwEo",
//     authDomain: "todo-app-288cc.firebaseapp.com",
//     projectId: "todo-app-288cc",
//     storageBucket: "todo-app-288cc.appspot.com",
//     messagingSenderId: "947742219158",
//     appId: "1:947742219158:web:c3e47c26c1e904162c9bb7",
//     measurementId: "G-5PYEHSTERY"
//   };

  import firebase from 'firebase'

  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBFC2IyVKSoVccWv4iQOE-pS95kRIoQwEo",
    authDomain: "todo-app-288cc.firebaseapp.com",
    projectId: "todo-app-288cc",
    storageBucket: "todo-app-288cc.appspot.com",
    messagingSenderId: "947742219158",
    appId: "1:947742219158:web:c3e47c26c1e904162c9bb7",
    measurementId: "G-5PYEHSTERY"
  })

  const db=firebaseApp.firestore();
  export default db;