
import VueFire from 'vuefire'
import firebase from 'firebase'

var db = firebase.initializeApp({
  apiKey: "AIzaSyDJ2Eh0hAU6ix9tea_aya7G7KkLrjuStjM",
  authDomain: "hackathon-1bec8.firebaseapp.com",
  databaseURL: "https://hackathon-1bec8.firebaseio.com",
  projectId: "hackathon-1bec8",
  storageBucket: "hackathon-1bec8.appspot.com",
  messagingSenderId: "335611432326"
}).database()

export default db