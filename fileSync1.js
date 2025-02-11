const fs=require("node:fs");
function myReadFile(){
try{
const data=fs.readFileSync("dummy.txt");
console.log("File Data:", data.toString());
}
catch(err){
    console.log("File Reading error:",err.message);
}
}
const myWriteFile=(data)=>{
    try{
        fs.writeFileSync("dummy.txt", data);
        console.log("Successfully write file");
    }
    catch(err){
        console.log("File Writing Error:",err.message);
    }
}
const myDeleteFile=(filename)=>{
  try{
      fs.unlinkSync(filename);
      console.log("Delete data Successfully")
  }
  catch(err){
      console.log("File deleting Error:",err.message)
  }
}

const myAppendFile=()=>{
    try{
        fs.appendFileSync("dummy.txt",data);
        console.log("Appended data Successfully")
    }
    catch(err){
        console.log("File Appending Error:",err.message)
    }
}
// myReadFile();
// const data="Hello hariom kaise ho?"
// myAppendFile(data);
// myWriteFile(data);
// myDeleteFile("dummy.txt");
// myReadFile();
module.exports={
  myReadFile:myReadFile,
  myWriteFile:myWriteFile,
  myAppendFile:myAppendFile,
  myDeleteFile:myDeleteFile,
  username: "Asish",
}