import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBhn4QFu6vglOf7qCs2egY1f-a1oxL5MEQ",
    authDomain: "react-todo-webapp-6a666.firebaseapp.com",
    projectId: "react-todo-webapp-6a666",
    storageBucket: "react-todo-webapp-6a666.appspot.com",
    messagingSenderId: "577720347436",
    appId: "1:577720347436:web:c23a63df90d05f9965da89"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;