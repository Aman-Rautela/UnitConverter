const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());        //to enable the communication between front-end and the back-end;
app.use(express.json());//so that the express can parse the data from the ui(PARSE INCOMMING json BODIES)

const lengthRoute = require('./routes/length');
const weightRoute = require('./routes/weight');
const temperatureRoute = require('./routes/temperature');

app.post('/', (req, res) =>{
    res.send(`----------SERVER IS RUNNING-----------`)
});

app.use('/length', lengthRoute);
app.use('/weight', weightRoute);
app.use('/temperature', temperatureRoute);


// const PORT = 3000;
// app.listen(PORT, () =>{
//     console.log(`--------ON PORT NUMBER ${PORT}--------`)
// })

module.exports = app;           //for deploymenet in VERCEL