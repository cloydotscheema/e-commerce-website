import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "ENTER YOUR OWN",
    authDomain: "ecom-db-f8713.firebaseapp.com",
    databaseURL: "https://ecom-db-f8713.firebaseio.com",
    projectId: "ecom-db-f8713",
    storageBucket: "ecom-db-f8713.appspot.com",
    messagingSenderId: "39362193920",
    appId: "1:39362193920:web:31d9128b6ebb77dc5d86e5",
    measurementId: "G-E4NJ30JCLD"
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
