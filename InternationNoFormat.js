const number=12344444
const f=new Intl.NumberFormat("en-in",{
    currency:"INR",
    style:"currency"
    // notation:"compact"
})
console.log(f.format(number))