var http = require('http');
http.createServer(function (req,resp)
{
resp.write("hello world");
resp.end();
}
).listen(1000);
console.log("Sangam here!!");
