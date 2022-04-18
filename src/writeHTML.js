const fs = require("fs");

const writeHTML = (html)=>{
    fs.writeFile("./dist/index.html",html,(err)=>{
        if (err){
            console.log(err)
        }
        else console.log("success")
    })
}

module.exports = writeHTML;