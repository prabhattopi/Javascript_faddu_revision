//Automatic semicolon insertion

//automatic compiler add kar de rha semicolon ko to koi bat nahi hai

//rule ke hisab se teen line par kyu aa rha hai

var a 
a
=
10
console.log(a)

//post increment ek line hona chahiye nahi to pre walla ka roop le lega 
let x=1,y=1
x 
++
y
console.log(x,y)

//return statement me bhi effect kar sakta hai

function asi(){
    return 
    {
        foo:1
    }
}

console.log(asi())