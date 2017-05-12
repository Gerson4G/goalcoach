import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBqfAxB5OXlqe4OQl7-ZnWk4UrmAok7Mok",
    authDomain: "goalcoach-b5261.firebaseapp.com",
    databaseURL: "https://goalcoach-b5261.firebaseio.com",
    projectId: "goalcoach-b5261",
    storageBucket: "goalcoach-b5261.appspot.com",
    messagingSenderId: "417083348228"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');