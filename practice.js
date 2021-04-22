var firebaseConfig = {
  apiKey: "AIzaSyAWQGMsxQBuy-NN1eekiKMJn-X6qJKnX2E",
  authDomain: "kwitter-project-724f2.firebaseapp.com",
  databaseURL: "https://kwitter-project-724f2-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-724f2",
  storageBucket: "kwitter-project-724f2.appspot.com",
  messagingSenderId: "806121937144",
  appId: "1:806121937144:web:a4a6d8f60e62c4cf91430d"
};
firebase.initializeApp(firebaseConfig);
  function adduser(){
   user_name =  document.getElementById("user_name").value
firebase.database().ref("/").child(user_name).update({
    purpose:"add user"
});
    
  }