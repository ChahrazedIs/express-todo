const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.listen( port , ()=>{
        console.log(` Server running on port ${port} `);
    });