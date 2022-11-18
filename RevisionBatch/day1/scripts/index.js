import { navbar } from "../component/navbar.js";
const navbari = document.getElementById("navbar");
navbari.innerHTML = navbar();

let nam = localStorage.getItem("ladai") || "";
document.getElementById("nam").append(nam);

const fetchi=async()=>{
    let res=await fetch("https://fakestoreapi.com/products")
    let data=await res.json()
    console.log(data)
    
}

fetchi()