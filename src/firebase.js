import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCfiw_DuVN0kw0NcrkIcmE5Hn468dXxHHA",
  authDomain: "starbucks-clone-2be61.firebaseapp.com",
  projectId: "starbucks-clone-2be61",
  storageBucket: "starbucks-clone-2be61.appspot.com",
  messagingSenderId: "355676268113",
  appId: "1:355676268113:web:17dddd843fe3b7ae193a70",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
