const http = require("http")

const obj ={
    name: "Maharshi",
    age:  26,
    position: "Devloper"
}


const server = http.createServer((req, res)=>{
    if(req.url == "/data" && req.method == "GET")
    {
        res.end("GET REQUEST")
    }
    else if (req.url == "/data" && req.method == "POST")
    {
        res.end("POST REQUEST")
    }
})
// const server = http.createServer((req, res) =>{
    
//     if(req.url == "/")
//     {
//         res.writeHead(200, {"content-type" : "text/HTML"})
//         res.end("<h3>try to understand backend concept</h3>")
//     }

//     else if(req.url == "/home")
//     {
//         res.writeHead(201)
//         res.end(JSON.stringify(obj))
//     }

//     else if(req.url == "/User")
//     {
//         res.writeHead(200, {"content-type" : "text/json"})
//         res.end(JSON.stringify(obj))
//     }

//     else if(req.url == "/Profile")
//     {
//         res.end("Maharshi Bhaiya..!")
//     }

//     else{
//         res.end("Invalid ApI / Error found")
//     }
// })

server.listen(8080, ()=>{
    console.log("server is running");
})