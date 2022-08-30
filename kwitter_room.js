var firebaseConfig = {
      apiKey: "AIzaSyDtolGV2eYkIePyLJPKR4R2YFCCwAyN46g",
      authDomain: "kwitter-b36d3.firebaseapp.com",
      databaseURL: "https://kwitter-b36d3-default-rtdb.firebaseio.com",
      projectId: "kwitter-b36d3",
      storageBucket: "kwitter-b36d3.appspot.com",
      messagingSenderId: "151566609013",
      appId: "1:151566609013:web:54001915d42e6c39a0663c",
      measurementId: "G-FSDQ993M79"
    };
    
    // Initialize Fireb 
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}