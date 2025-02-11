const {myReadFile, myWriteFile, myAppendFile, myDeleteFile}=require("./fileSync1")
const data="helllo"
myReadFile();
myWriteFile(data);
myReadFile();
myAppendFile(data);
myReadFile();
myDeleteFile("dummy.txt")
console.log("User name=",username);