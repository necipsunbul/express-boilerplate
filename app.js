const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const {error404,viewError} = require('./app/middlewares/errorViewMids');
const appConfigs = require('./core/config');

dotenv.config();

// routes importing
const indexRoutes = require('./app/routes/indexRoutes');
const userRoutes = require('./app/routes/userRoutes');

const app = express()
const port = process.env.PORT;

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:true}))

if(process.env.ENVTYPE === 'development'){
    app.use(logger('dev'));
}

appConfigs();

app.use('/',indexRoutes);
app.use('/user',userRoutes);


app.use(error404);
app.use(viewError);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});




