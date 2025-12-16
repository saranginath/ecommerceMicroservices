const app = require('./app');
require('dotenv').config();
const connectDB = require('./config/db');

connectDB();
const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log(`Product service listening on ${PORT}`);
})