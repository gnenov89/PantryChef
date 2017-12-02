import firebase from "firebase";

firebase
  .initializeApp({
    apiKey: "AIzaSyCDRmiCMMO2H-YrEDvesJ3rIgMk2uvx2Wc",
    authDomain: "repice-app.firebaseapp.com",
    databaseURL: "https://repice-app.firebaseio.com",
    projectId: "repice-app",
    storageBucket: "repice-app.appspot.com",
    messagingSenderId: "688289686789"
  })
  .auth()
  .setPersistence("local");

const auth = firebase.auth();

auth.createAndSetUserWithEmailAndPassword = function (email, password) {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      return setToken(user);
    });
};

function deleteCookie() {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 60 * 1000 * 55);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
}

function setToken(user) {
  if (!user) {
    return Promise.resolve().then(deleteCookie());
  } else {
    return user.getIdToken().then(function (token) {
      setCookie("token", token);
      return user;
    });
  }
}

auth.onAuthStateChanged(setToken);

export default auth;