// const express = require("express");
// const app = express();


// module.exports = app;
const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use(express.json());
require('dotenv').config();

// mongodb config

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const url = process.env.DATABASE_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
   const advisoryComittee = client.db("SAI_WEBSITE").collection("SAI_AGRO_AdvisoryCommittee");
    const boardsOfDirectors = client.db("SAI_WEBSITE").collection("SAI_AGRO_BoardsOfDirectors");
    const fieldTeam = client.db("SAI_WEBSITE").collection("SAI_AGRO_FieldTeam");
    const manager = client.db("SAI_WEBSITE").collection("SAI_AGRO_Manager");
    const blogCollection = client.db("SAI_WEBSITE").collection("SAI_AGRO_blog");

    // get all team members
    app.get("/all-advisoryComittee",async(req,res)=>{
        const members = advisoryComittee.find();
        const results = await members.toArray();
        res.send(results); 
    })
    app.get("/all-boardsOfDirectors",async(req,res)=>{
        const members = boardsOfDirectors.find();
        const results = await members.toArray();
        res.send(results); 
    })
    // get all partners members
    app.get("/all-fieldTeam",async(req,res)=>{
        const partners = fieldTeam.find();
        const results = await partners.toArray();
        res.send(results); 
    })
    // get all partners members
    app.get("/all-manager",async(req,res)=>{
        const partners = manager.find();
        const results = await partners.toArray();
        res.send(results); 
    })
    // get all blogs members
    app.get("/all-blogs",async(req,res)=>{
        const blogs = blogCollection.find();
        const results = await blogs.toArray();
        res.send(results); 
    })

    // get single team member data 
    app.get("/advisoryComittee/:id",async(req,res)=>{
      const id = req.params.id; 
      const filter = { _id : new ObjectId(id)};
       
      const result = await advisoryComittee.findOne(filter);
           
      res.send(result);
    })
    app.get("/boardsOfDirectors/:id",async(req,res)=>{
      const id = req.params.id; 
      const filter = { _id : new ObjectId(id)};
       
      const result = await boardsOfDirectors.findOne(filter);
      
      res.send(result);
    })
    app.get("/manager/:id",async(req,res)=>{
      const id = req.params.id; 
      const filter = { _id : new ObjectId(id)};
       
      const result = await manager.findOne(filter);
      
      res.send(result);
    })
    app.get("/fieldTeam/:id",async(req,res)=>{
      const id = req.params.id; 
      const filter = { _id : new ObjectId(id)};
       
      const result = await fieldTeam.findOne(filter);
      
      res.send(result);
    })


app.listen(3000, () => console.log("Server ready on port 3000."));

