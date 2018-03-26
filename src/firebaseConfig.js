import Firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD3zc2ORRhQMDVA6EzFOAmFVxfUPUUce0A",
  authDomain: "ecommerce-236bb.firebaseapp.com",
  databaseURL: "https://ecommerce-236bb.firebaseio.com",
  projectId: "ecommerce-236bb",
  storageBucket: "ecommerce-236bb.appspot.com",
  messagingSenderId: "1089695530182"
};

export default Firebase.initializeApp(config);