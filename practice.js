
//ADD YOUR FIREBASE LINKS
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

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }