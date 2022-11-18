import { navbar } from "../component/navbar.js";
const navbari = document.getElementById("navbar");
navbari.innerHTML = navbar();

let register=async()=>{
    let form_data={
        names:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value, 
        username:document.getElementById("username").value,
        mobile:document.getElementById("mobile").value,
        description:document.getElementById("description").value,



    };
  if(form_data.names&&form_data.email&&form_data.password&&form_data.username&&form_data.mobile&&form_data.description){
    form_data=JSON.stringify(form_data);
    let res=await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
        method:"POST",
        body:form_data,
        headers:{
            "Content-Type":"application/json"
        }
    });
    
    window.location.href="./login.html"
    
  }
  else{
    alert("Please fill all the details")
  }

};
document.getElementById("submit").addEventListener("click",register)