import express from 'express'; 
import bodyParser from 'body-parser';
import axios from 'axios';
import {fileURLToPath} from 'url';
import path from 'path';  


const app = express(); 
const port = 3000; 


// we need to find the absolute location of the public folder inorder to use it so 
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

//create the middlewares 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, "public"))); 

app.get('/', (req, res)=>{
    res.render('index.ejs'); 
});  

app.listen(port, ()=>{
    console.log(`listenting on port ${port}`); 
}); 