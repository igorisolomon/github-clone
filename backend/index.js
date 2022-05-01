const express = require('express')
const cors = require('cors')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})

app.get('/auth', (req,res)=>{
    res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    )
})
