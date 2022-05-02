const express = require("express");
const cors = require("cors");
// const { get } = require("http");
const axios = require("axios");
const querystring = require('querystring');
const jwt = require('jsonwebtoken');
const {get} = require('lodash');
const cookieParser = require('cookie-parser');

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


const getcode = async() =>{
    const result = await axios.get(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)

    return result
}
// Authenticate
app.get('/auth', (req,res)=>{
    res.send = getcode()
    
    // console.log(result);
    
    // res.redirect(
    //     `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    // )
})

async function getGitHubUser({ code }) {
    const githubToken = await axios
      .post(
        `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`
      )
      .then((res) => res.data)
  
      .catch((error) => {
        throw error;
      });
  
    const decoded = querystring.parse(githubToken);
  
    const accessToken = decoded.access_token;
  
    return axios
      .get("https://api.github.com/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => res.data)
      .catch((error) => {
        console.error(`Error getting user from GitHub`);
        throw error;
      });
  }

// get token
app.get("/getuser", async(req, res) => {
    const code = get(req, "query.code");
    const path = get(req, "query.path", "/");
  
    if (!code) {
      throw new Error("No code!");
    }
  
    const gitHubUser = await getGitHubUser({ code });
  
    const token = jwt.sign(gitHubUser, secret);
  
    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      domain: "localhost",
    });
  
    res.redirect(`http://localhost:3000${path}`);
});

app.get("/api/me", (req, res) => {
    const cookie = get(req, `cookies[${COOKIE_NAME}]`);
  
    try {
      const decode = jwt.verify(cookie, secret);
  
      return res.send(decode);
    } catch (e) {
      return res.send(null);
    }
  });
