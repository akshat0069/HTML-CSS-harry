//synchronous or blocknig
// -line by line execution 

//asynchronous or non blocking
//-line by line execution not gauranteed
//-callbacks will fire

const fs=require("fs");
fs.readFile("dwle.txt","utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("this is a message");