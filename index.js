const http=require('http');
const express=require('express');
const path=require('path');
const app=express();
const server=http.createServer(app);

//Socket.io
const{Server}=require('socket.io');
const { Socket } = require('dgram');
const io=new Server(server);

io.on("connection",(socket)=>{
    socket.on("userMessage",(message)=>{
        io.emit("message",message);
    })
})



app.use(express.static(path.resolve('public')));

app.get('/',(req,res)=>{
    res.sendFile("/public/index.html")
})

server.listen(9000,()=>{
    console.log('Server is running on port 9000');
})
