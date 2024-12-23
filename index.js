import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
});

app.post('/login', (req , res) => {
    let f_username = req.body.f_username
    let f_password = req.body.f_password
    console.log(f_username + ' ' + f_password)
    res.send(`Hello ${f_username} ${f_password}.`)
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});