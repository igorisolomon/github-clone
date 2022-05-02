const express = require("express");
const cors = require("cors");
// const { get } = require("http");
const axios = require("axios");
const querystring = require("querystring");
const jwt = require("jsonwebtoken");
const { get } = require("lodash");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const COOKIE_NAME = "github-jwt";

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

// Authenticate
// app.get("/authenticate", async(req, res) => {
//   const { code } = req.query;
//   const token = await axios.get(
//     `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_SECRET}&code=${code}`
//   )
//     .then(response=>res.json(response.data))
//     .then((paramsString) => {
//       let params = new URLSearchParams(paramsString);
//       const access_token = params.get("access_token");

//       // Request to return data of a user that has been authenticated
//       return fetch(`https://api.github.com/user`, {
//         headers: {
//           Authorization: `token ${access_token}`,
//         },
//       });
//     })
//     .then((response) => response.json())
//     .then((response) => {
//       return res.status(200).json(response);
//     })
//     .catch((error) => {
//       return res.status(400).json(error);
//     });

//   res.redirect(`http://localhost:3000`);
// });

app.post("/authenticate", async(req, res) => {
  const { code } = req.body;

  const token = await axios.get(
    `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_SECRET}&code=${code}`
  )
    .then(response=>res.json(response.data))
    .catch(error=>{
          return res.status(400).json(error);
        })


  //     let params = new URLSearchParams(paramsString);
  //     const access_token = params.get("access_token");

        
  // const user = await axios.get(`https://api.github.com/user`, {
  //         headers: {
  //           Authorization: `token ${access_token}`,
  //         },
  //       });
  //     })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       return res.status(200).json(response);
  //     })
  //     .catch((error) => {
  //       return res.status(400).json(error);
  //     });
});

app.post("/get_user", async(req, res)=>{
  const {access_token} = req.body;

  const userdata = await axios.get(`https://api.github.com/user`, {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `token ${access_token}`,
          }
      }) 
      .then(response=>res.json(response.data))
      .catch(error=>{
            return res.status(400).json(error);
          })
})



app.post("/get_repo", async(req, res)=>{
  const {access_token} = req.body;

  const userdata = await axios.get(`https://api.github.com/user/repos`, {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `token ${access_token}`,
          }
      }) 
      .then(response=>res.json(response.data))
      .catch(error=>{
            return res.status(400).json(error);
          })
})
