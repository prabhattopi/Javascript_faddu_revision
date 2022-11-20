//Sharing from a webApp to another WebApp but having diffrent origin

// prabhtSingh.in--->browserDonot Allow share information to another 
//another domain and subdomains also and neither diff port and diff protocol (https/http)


//now cors is there browser allowed

//when sharing preflight call made in between web app
//A---->B
// 1.preflight(options call) 
    //B---->sends--> additional https headers to verify A call
//2. cors additional http headers

    //then actual call made
//most commonly https additional headers are accept-controll-Allow-origin*
//mehtods also
//general api 