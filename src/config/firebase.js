import firebase from 'firebase';
var config = {
    apiKey: TIKAL_FUSEDAY_2016_API_KEY,
    authDomain: "js-fuseday-2016-stream.firebaseapp.com",
    databaseURL: "https://js-fuseday-2016-stream.firebaseio.com",
    storageBucket: "js-fuseday-2016-stream.appspot.com",
    messagingSenderId: "533084422648"
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

export const getOnce = () => {
    return firebase
        .database()
        .ref('/stream_2')
        .orderByChild('page')
        .once('value');
}

export const getOn = (callback) => {

    var count = 0;
    firebase
        .database()
        .ref('/stream_2')
        .orderByChild('page')
        .limitToLast(100)
        .on('child_added', callback);
}