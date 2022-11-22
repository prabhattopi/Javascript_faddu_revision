//the event propogation mode determines in which order the elements recieve the event

//top---bottom capture phase

//bottom-top  bubble phase

// const parentCall=()=>{
//     alert("Parent call")
// }
// const childCall=()=>{
//     alert("child call")
//     event.stopPropagation()//event bubbling effect nahi chahiye tha
    
// }


//capturing top--bottom also know as trickling
//add event listner ka raaaj khulaga 3 argument kis kaam ka wahi hai jar iska
//inCapturing use add event listner
const parentId=document.getElementById("parentId");
const childId=document.getElementById("childId")


const parentCall=()=>{
    alert("Parent call")
}
const childCall=()=>{
    alert("child call")
    

}

parentId.addEventListener("click",parentCall,true)
childId.addEventListener("click",childCall,true)