const express = require("express");

require('dotenv').config();
const apiRouter = require('./routes/routes')
const { dbConection } = require("./databases/connection");

const app = express();

app.set('port', process.env.PORT || 8000);

app.use(express.json());

dbConection();

app.use('/api/v1', apiRouter);

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'))
})
