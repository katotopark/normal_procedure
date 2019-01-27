import firebase from 'firebase'
import Vue from 'vue'

let config = {
  apiKey: 'AIzaSyB1k3KpbNpR0EVsjbYLrX4qzJTRHLOFNEg',
  authDomain: 'normal-procedure.firebaseapp.com',
  databaseURL: 'https://normal-procedure.firebaseio.com',
  projectId: 'normal-procedure',
  storageBucket: 'normal-procedure.appspot.com',
  messagingSenderId: '706718781178'
}

let app = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app()

let db = app.database()

export default db
