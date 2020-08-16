
var url = require('url'),
    fs = require('fs');

var globstring = "";
var prevglobstring = "";

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

var qs = require('querystring');

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 100);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  // socket.emit("FromAPI", response);


  if(globstring != prevglobstring){
      //console.log(globstring);
      prevglobstring = globstring;
      const responser = globstring;
      socket.emit("FromAPI", responser);
  }
};

server.listen(port, () => console.log(`Listening on port ${port}`));



http.createServer(function (req, res) {
   var url_parts = url.parse(req.url);
   //console.log(url_parts);
   //console.log(req);
   if(url_parts.pathname.includes("favicon")){

   }else{



    if(req.method=='POST') {
            var body='';
            req.on('data', function (data) {
                body +=data.toString();
            });
            req.on('end',function(){
                var post =  body;
                console.log(post);
            });
    }
    else if(req.method=='GET') {
        //console.log("WITHIN SERVER on 8008");
        var msg = unescape(url_parts.pathname.substr(1));
        globstring = msg;    

    }



     if(url_parts.pathname.substr(0,1) == '/') {
            res.end();
     } 
  }
}).listen(4002);
console.log('Server running (4002)'); 