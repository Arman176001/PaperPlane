import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const app=express();
const port = 3000;
const __dirname=dirname(fileURLToPath(import.meta.url));


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.get("/blogging",(req,res)=>{
    res.render("blogging.ejs");
});
app.post("/submit",(req,res)=>{
    var title=req.body["Title"];
    var body= req.body["body"];
    res.render("result.ejs",{"Title":title,"Body":body});
});
app.listen(port,()=>{   
    console.log(`Listening to port ${port}`);
});
