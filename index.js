const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/all-advisoryComittee",(req,res)=>{
        
        res.send(here are all the members); 
    })

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
