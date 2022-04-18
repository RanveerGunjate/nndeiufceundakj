
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
    apiKey: "AIzaSyBnHDoHNSHTG7IeOW0EvI_CC7EOOI-yo-U",
    authDomain: "kwitter-89d70.firebaseapp.com",
    databaseURL: "https://kwitter-89d70-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-89d70",
    storageBucket: "kwitter-89d70.appspot.com",
    messagingSenderId: "659811373163",
    appId: "1:659811373163:web:d95e92c06dde1a6d02612e",
    measurementId: "G-9ECHMGMJQF"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
