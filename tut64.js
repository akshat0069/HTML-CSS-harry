const fs=require("fs");
let text=fs.readFileSync("dwle.txt","utf-8");

text=text.replace("and", "rohan")
console.log("the content of file is ")
console.log(text);

console.log("creating a new file")
fs.writeFileSync("rohan.txt",text);
/*new file named rohan.txt is created with the content of text*/

/*now reading new file*/
let newtext=fs.readFileSync("rohan.txt","utf-8");
console.log(newtext);