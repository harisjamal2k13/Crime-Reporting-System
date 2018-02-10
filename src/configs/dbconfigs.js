import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD4OpUrUlD4d3DZ7UmmFnjAjQE2JQ-6204",
    authDomain: "react-crimereportapp.firebaseapp.com",
    databaseURL: "https://react-crimereportapp.firebaseio.com",
    storageBucket: "react-crimereportapp.appspot.com",
    messagingSenderId: "761653753246"
};

firebase.initializeApp(config);
export const database = firebase.database();

export const storage = firebase.storage();

export const fbAuth = firebase.auth();
 