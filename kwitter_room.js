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

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }