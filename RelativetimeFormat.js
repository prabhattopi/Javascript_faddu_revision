const f=new Intl.RelativeTimeFormat("en-in",{
    style:'long',
    numeric:"auto"
    
})
console.log(f.format(1,"days"))