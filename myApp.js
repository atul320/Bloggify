const bodyParser = require("body-parser");
const PORT=3000;
let express = require("express");
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// #1
// console.log("Hello World");

// #2
// app.get("/", (req, res) =>{
//   res.send("Hello Express");
//  })

// #4
// app.use("/public", express.static(__dirname + "/public"));

// #3
// app.get("/", (request, response) => {
//   response.sendFile(__dirname + "/views/index.html");
// });

// #4
// app.get("/json", (request, response) => {
//   let message = { message: "Hello json" };
//   response.json(message);
// });

// #5
// app.get("/json", (request, response) => {
//   if (process.env["MESSAGE_STYLE"] == "uppercase") {
//     response.json({ "message": "HELLO JSON" });
//   } else {
//     response.json({ "message": "Hello json" });
//   }
// });

// #6
// app.get("/json",(request,response,next)=>{
//   let method = request.method;
//   let path = request.path;
//   let ip = request.ip;
//   console.log(method + " " + path + " - " + ip);
//   next();
// });

// #7
// app.get("/now",(request,response,next)=>{
//   request.time = new Date().toString();
//   next();
// },(request,response)=>{
//   response.json({time:request.time});
// })

// #8
// app.get("/:word/echo", (request, response) => {
//   response.json({ echo: request.params.word });
// });

// #9
// app.get("/name",(request,response)=>{
//   let firstname = request.query.first;
//   let lastname = request.query.last;
//   let name = firstname + " " + lastname;
//   response.json({ name });
// });

// #10
// app.post("/name",(request,response)=>{
//   let name = request.body.first + " " + request.body.last;
//   response.json({name:name});
// });


module.exports = app;
app.listen(PORT,()=>{
    console.log(`Node is listening on port "http://localhost:${PORT}"...`);
});