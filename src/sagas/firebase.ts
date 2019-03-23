import '@firebase/firestore'
import * as firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
}

const myFirebaseApp = firebase.initializeApp(config)

export const DB = myFirebaseApp.firestore()
export default new ReduxSagaFirebase(myFirebaseApp)
