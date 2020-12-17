import firebase from 'firebase'

const firebaseConfig = {
        apiKey: "AIzaSyBZFdPg9INuJ_RusnjywtSvLMw2-DjCTSA",
        authDomain: "fir-auth-app-3113b.firebaseapp.com",
        projectId: "fir-auth-app-3113b",
        storageBucket: "fir-auth-app-3113b.appspot.com",
        messagingSenderId: "881202129160",
        appId: "1:881202129160:web:94a5bde52171cdc781a4bd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db