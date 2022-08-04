const firebaseConfig = {
    apiKey: "AIzaSyCN8CZuia97f7OrQambx6Atbu8Kb2eOMHY",
    authDomain: "let-schat-ced4b.firebaseapp.com",
    databaseURL: "https://let-schat-ced4b-default-rtdb.firebaseio.com",
    projectId: "let-schat-ced4b",
    storageBucket: "let-schat-ced4b.appspot.com",
    messagingSenderId: "468008004912",
    appId: "1:468008004912:web:e37916ecf46f8d444a2cf5"
  };
  
  //Initializing Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push(
        {
            name: user_name,
            message: msg,
            like: 0
        }
    );
        document.getElementById("msg").value="";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }