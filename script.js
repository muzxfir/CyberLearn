function login(){

let name = document.getElementById("username").value;

if(name==""){
    alert("Please enter username");
}
else{

localStorage.setItem("student",name);

window.location="dashboard.html";

}

}



let user = localStorage.getItem("student");

let welcome = document.getElementById("welcome");


if(welcome && user){

welcome.innerHTML =
"Welcome, " + user + " 👋";

}
