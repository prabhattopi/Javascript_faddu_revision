import { navbar } from "../component/navbar.js";
let navbari=document.getElementById("navbar")
navbari.innerHTML=navbar()

let login=async()=>{
    let obj={
        username:document.getElementById("username").value,
        password:document.getElementById("password").value,


    }


    obj=JSON.stringify(obj)
    let res=await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method:"POST",
        body:obj,
        headers:{
            "Content-Type":"application/json"
        }
    })
    let data=await res.json()
    let username=document.getElementById("username").value
    //  getUserDeltails(username,data.token)

    if(data.error==false){
        let p=document.createElement("p")
        p.innerText=document.getElementById("username").value
        p.style.color="white"
        p.fontWeight=600

        document.querySelector("#navbar").append(p)
        localStorage.setItem("ladai",username+" "+"logged in")
        window.location.href="./index.html"
    }

}

document.getElementById("submit").addEventListener("click",login)

// let getUserDeltails=async(username,token)=>{
//     let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
//         headers:{
//             Athorization:`Bearer ${token}`
//         },
//     })
//     let data=await res.json()
//     console.log(data)
  
// }