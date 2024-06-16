// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000
// const bodyParser = require("body-parser");

// app.use(bodyParser.json())
// app.get('/', function(req, res) {
//   const message = req.body.name;
//   console.log(message);
//   res.json({
//     message: "message"
//   })
// })


// app.listen(port)

// res.status(401).send(values)

/////////////////////////////////////////////////

// const express = require("express");
// const app = express()
// const port = 3001

// function sum(n) {
//   let ans = 0;
//   for(let i = 1; i <= n; i++){
//     ans = ans + i;
//   }

//   return ans;
// }

// app.get("/", function(req, res){
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("hello world " + "the sum is" + ans);
// })

// app.listen(port)

////////////////////////////////////

// const express = require("express")
// const app = express()
// const port = 3001

// app.get("/health-checkup", function(req, res){
//   const kidneyId = req.query.kidneyId;
//   const username = req.headers.username;
//   const password = req.headers.password;

//   if(!(username == "Michael" || password == "pass")){
//     res.status(401).json({
//       msg: "Unauthorized!"
//     })
//     return;
//   }

//   if(kidneyId != "1" && kidneyId != "2"){
//     res.status(411).json({
//       msg: "Invalid kidneyId!"
//     })
//     return;
//   }

//   res.json({
//     msg: "All good!"
//   })
// })

// app.listen(port, function() {
//   console.log(`Server is running on port ${port}`);
// })

//Middleware////////////////////////////////////////////////////////////////

// const express = require("express");
// const app = express();
// const port = 3001;

// function usermiddleware(req, res, next) {
//   const username = req.headers.username; 
//   const password = req.headers.password; 

//   if (!(username == "Michael" || password == "pass")) {
//     res.status(401).json({
//       msg: "Unauthorized!"
//     });
//   } else {
//     next();
//   }
// }

// function kidneymiddleware(req, res, next) {
//   const kidneyId = req.query.kidneyId; 
//   if (kidneyId != "1" && kidneyId != "2") {
//     res.status(400).json({
//       msg: "Invalid Kidney"
//     });
//   } else {
//     next();
//   }
// }

// app.use(usermiddleware);  // -> takes the middleware as an input
// app.get("/health-checkup", kidneymiddleware, function(req, res) {
//   res.send("All good!");
// });

// app.get("/health-checkup", function(req, res) {
//   res.send("All good");
// })

// app.listen(port, function() {
//   console.log(`Server is running on port ${port}`);
// });

// global catches /////////////////////////////////////////////////////////////////////////////

// const express = require("express")
// const app = express()
// const port = 3001

// app.use(express.json())
// app.post("/health-checkup", function(req, res) {
//   const kidneys = req.body.kidneys
//   const kidneylength = kidneys.length

//   res.send("you have" + kidneylength + "kidneys")
// })

// app.use(function(err, req, res, next) {
//   res.status(500).json({
//     msg: "Invalid input"
//   })
// })

// app.listen(port, function() {
//   console.log(`Server is running on port ${port}`)
// })

// zod ////////////////////////////////////////////////////////////////////////////////

const express = require("express");
const zod = require("zod");
const app = express();
const port = 3001;

const schema = zod.array(zod.number());

app.use(express.json());
app.post("/health-checkup", function(req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)

    res.send({
      response
    })
  });

app.listen(port)