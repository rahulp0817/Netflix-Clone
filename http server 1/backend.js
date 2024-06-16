// const express = require("express");
// const zod = require("zod");
// const app = express();

// const schema = zod.array(zod.number());

// app.use(express.json());
// app.post("/health-checkup", function(req, res) {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys)

//     if(!response.success){
//         res.status(411).json({
//             msg: "Invalid input"
//         })
//     } else {
//       res.send({
//         response
//       })
//     }
//   });

// app.listen(3000);

///////////////////////////////////////////////////////

// const zod = require("zod")

// function validatearr(arr) {

//     const schema = zod.array(zod.number());

//     const response = schema.safeParse(arr);

//     console.log(response);

// }

// validatearr([1, 2, 3])

/////////////////////////////////////////

const express = require("express");
const app = express();
const z = require("zod");

function validateuser(obj) {
  const schema = z.object({
    username: z.string().min(6).max(12),
    email: z.string().email(),
    password: z.string().min(8).max(16)
  })

  const response = schema.safeParse(obj);
  console.log(response);
}

// validateuser({
//   username: "michael",
//   email: "john@doe.com",
//   password: "mypassword"
// })

app.get("/login", function(req, res) {
  const response = validateuser(req.body);

  if(!response.success){
    res.status(400).json({
      msg: "Invalid input"
    })
    return;
  }
})

app.listen(3000);