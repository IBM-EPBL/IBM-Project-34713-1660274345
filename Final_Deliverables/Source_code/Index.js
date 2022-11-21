var data = [
    {
        username:"ARUNPRASAD",
        password:"0001"    
    },
    {
        username:"EZHILARASAN",
        password:"0002"
    },
    {
        username:"JASWANTH",
        password:"0003"
    },
    {
        username:"THAMARAI",
        password:"0004"
    },
    {	
	username:"VENKATRAJ",
	password:"00005"
    },
  ]
  function login(){
    var uname = document.getElementById("username").value
    var pass = document.getElementById("password").value
  
    for (i = 0; i<data.length; i++){
        if (uname == data[i].username && pass == data[i].password){
            window.location.replace("home.html")
            return false
        }
    }
    alert("incorrect password")
  }
  function register(){
    var runame = document.getElementById("username").value
    var rpass = document.getElementById("password").value
    var rpass1 = document.getElementById("password1").value
    if (rpass == rpass1){
        var rdata = {
            username: runame,
            password: rpass
        }
    }else{
        alert("password doesn't match")
        return
    }
    
    for (i = 0; i<data.length; i++){
        if (runame == data[i].username){
            alert("Username not available")
            return false
        }
    }
    data.push(rdata)
    window.location.href("home.html")
  }
