import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBTGL-WIiO6LyES2tT53Xy8WQkKjUo3_fw",
    authDomain: "mobiletodos.firebaseapp.com",
    databaseURL: "https://mobiletodos.firebaseio.com",
    storageBucket: "mobiletodos.appspot.com"
};

var firebaseApp = firebase.initializeApp(firebaseConfig, 'Test');
export default FireBaseApp = firebaseApp;