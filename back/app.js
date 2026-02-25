import express from 'express';
// import { PORT } from './config/config.js';
import AllRoutes from './routes/AllRoutes.js'
import pdf from 'pdf-creator-node'
import fs from 'fs'
import cors from 'cors'
import upload from 'express-fileupload';
import PATH from 'path';
import IsUserLoggedIn from './util/IsUserLoggedIn.js';

// PATH.resolve()

let app = express();

app.use(cors());
app.use(upload());
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(express.static(PATH.resolve()+"/assets"));



app.use(AllRoutes);

let fullname = "James Joel"

var html = fs.readFileSync("template.html", "utf8");
var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            contents: `<div style="text-align: center;">
            <h1>Resume</h1>
            <h3>Full Name : ${fullname}</h3>
            </div>`
        
        }
    };
var document = {
  html: html,
  data : {},
  path: "./resume.pdf",
  type: "",
};

app.get("/demo", async(req, res)=>{
    pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error("-----------", error);
  });
})

let PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log("Server Running With Port ", PORT);
})