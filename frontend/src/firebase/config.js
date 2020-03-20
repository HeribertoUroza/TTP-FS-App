import { firebase } from '@firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCyVGu7gWTSCJHTmmZJ5_9BcQGiHFcRbD8',
    authDomain: 'ttp-fs-app.firebaseapp.com',
    databaseURL: 'https://ttp-fs-app.firebaseio.com',
    projectId: 'ttp-fs-app',
    storageBucket: 'ttp-fs-app.appspot.com',
    messagingSenderId: '368063808790',
    appId: '1:368063808790:web:896e2fb691eb8ea34d3c37',
    measurementId: 'G-NTZEDXRNBK'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
