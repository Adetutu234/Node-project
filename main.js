const http = require("http") 

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-type","text/html")
    res.end("<h1>Hello Node!!!!</h1>\n")
})

const PORT = 3000

server.listen(PORT, ()=>{
    console.log(`server is running at http://localhost: ${PORT}....`);
    
})