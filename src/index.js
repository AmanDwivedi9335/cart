import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7HN0ABILpasmYf1MwGatjGNzrf2yGEaI",
  authDomain: "kartapp-735cc.firebaseapp.com",
  projectId: "kartapp-735cc",
  storageBucket: "kartapp-735cc.appspot.com",
  messagingSenderId: "656219520433",
  appId: "1:656219520433:web:3475f91554b99f2abd5190"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
