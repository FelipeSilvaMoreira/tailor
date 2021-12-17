import firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyD5l6PKFMQrRJuXyX9GoMcLU2PLZJyb8Xs",
    authDomain: "tailores.firebaseapp.com",
    projectId: "tailores",
    storageBucket: "tailores.appspot.com",
    messagingSenderId: "918609445224",
    appId: "1:918609445224:web:491c2095bca13d9eb396dd"
};

const devConfig = {
    apiKey: "***************",
    authDomain: "***************",
    databaseURL: "***************",
    projectId: "***************",
    storageBucket: "***************",
    messagingSenderId: "***************"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();