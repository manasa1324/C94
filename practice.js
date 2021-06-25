
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDM9qkKrc-S-5YdmfKj_il6c1q0pbxlJBM",
    authDomain: "test-1e64e.firebaseapp.com",
    databaseURL: "https://test-1e64e-default-rtdb.firebaseio.com",
    projectId: "test-1e64e",
    storageBucket: "test-1e64e.appspot.com",
    messagingSenderId: "914497802305",
    appId: "1:914497802305:web:1c269518b0a018452676c0",
    measurementId: "G-NZ1C1EDKJP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update(
        {
            purpose : "adding user"
        }
    );
}