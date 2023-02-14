//question1
const fs = require('fs');

let products = fs.readFileSync("product.json" , "utf-8");
let prodArray = JSON.parse(products)
console.log(prodArray);
/////////////////////////////////////////////////////////////////
//question2 and question 3 //////////////////////////////
const http = require("http");
const server = http.createServer(function(req,res){

    let urls = req.url.split('/');
    if(urls[1] == "home"){

    res.write("<bold>welcome to our API</bold>");
    }

    else if(urls[1] == "products"){
   

    
        
        for(let i = 0 ; i <prodArray.length ; i++){
      
    
            res.write(`<h4>name : ${prodArray[i].name}</h4>`)
            res.write(`<h4>price : ${prodArray[i].price}</h4>`)
            res.write(`<h4>color:  ${prodArray[i].color}</h4>`)
            res.write(`<hr>`)
        }
        
    }
    else if(urls[1] == "products" && urls[2] == 1){

        res.write(`<h4>name : ${prodArray[0].name}</h4>`)
        res.write(`<h4>price : ${prodArray[0].price}</h4>`)
        res.write(`<h4>color:  ${prodArray[0].color}</h4>`)
        res.write(`<hr>`)
    }
  ///question 4//////////////////////////////////////////////////////////////
 else{
    res.write("not found");
    res.writeHeader(404);
 }
    res.end();

})
server.listen(4000 ,function(){
    console.log("hi from my server listen to port 4000");
})