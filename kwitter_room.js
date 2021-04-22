
var firebaseConfig = {
      apiKey: "AIzaSyDIxIwA0FDOejMFNE-hC5LQRjiXAoM5-es",
      authDomain: "kwitter-7afab.firebaseapp.com",
      projectId: "kwitter-7afab",
      storageBucket: "kwitter-7afab.appspot.com",
      messagingSenderId: "963846874023",
      appId: "1:963846874023:web:4c2911fe19471da1ad0c82"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      
      
      });});}
getData();
