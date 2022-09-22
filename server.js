const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override')
const path = require('path');
require('dotenv').config()
console.log(`this is: ${process.env}`) 

const app = express();
const {Tutorial} = require('./models/model')

const tutorRoutes = require('./app/routes')

Tutorial.sync({ force: true}).then(()=>{
    console.log('Tutorials synced!')
})

const corsOptions = {
    origin: 'http://localhost:8080/'
}


app.use(cors(corsOptions.origin));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, '/app/dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/tutorials',tutorRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}}`);
})