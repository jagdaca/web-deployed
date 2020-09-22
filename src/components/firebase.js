import firebase from "firebase/app"
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCsX7v_bilGR_tJVn60WLBeoaPpULRmmko",
    authDomain: "crud-tutorial-b015f.firebaseapp.com",
    databaseURL: "https://crud-tutorial-b015f.firebaseio.com",
    projectId: "crud-tutorial-b015f",
    storageBucket: "crud-tutorial-b015f.appspot.com",
    messagingSenderId: "525117887240",
    appId: "1:525117887240:web:003118c5a5cb84257c92bd",
    measurementId: "G-M360R74QD4"

}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//firebase.analytics()

export default firebase
