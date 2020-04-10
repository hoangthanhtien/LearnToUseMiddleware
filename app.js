const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1><br>This is the homepage");
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server stated at port ${PORT}`);
})