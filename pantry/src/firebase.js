import firebase from "firebase"

const config = {
    apiKey: "AIzaSyCDRmiCMMO2H-YrEDvesJ3rIgMk2uvx2Wc",
    authDomain: "repice-app.firebaseapp.com",
    databaseURL: "https://repice-app.firebaseio.com",
    projectId: "repice-app",
    storageBucket: "repice-app.appspot.com",
    messagingSenderId: "688289686789"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export default firebase
