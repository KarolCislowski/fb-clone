import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD0zgD_g3aGyHU-7Nc3oL0tol_F7hIxkVw",
  authDomain: "cislowski-fb-clone.firebaseapp.com",
  projectId: "cislowski-fb-clone",
  storageBucket: "cislowski-fb-clone.appspot.com",
  messagingSenderId: "302902064923",
  appId: "1:302902064923:web:b7bb7d50fb1ca48ec745be"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db