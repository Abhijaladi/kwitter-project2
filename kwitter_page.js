//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBqd7lU9k25S9M27ju6Besp0rmWOnYbfEw",
      authDomain: "class-93-6b380.firebaseapp.com",
      databaseURL: "https://class-93-6b380-default-rtdb.firebaseio.com",
      projectId: "class-93-6b380",
      storageBucket: "class-93-6b380.appspot.com",
      messagingSenderId: "576731499080",
      appId: "1:576731499080:web:c0597979032d47d720267d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
