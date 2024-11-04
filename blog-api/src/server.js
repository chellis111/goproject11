const http = require('http');
const app = require('./app');
const httpserver = http.createServer(app);
const connectDb = require('./helpers/dbconfig');
const {PORT} = require('./config/index');



const startserver = async () => {
    await connectDb();
    httpserver.listen(PORT, () => {
        console.log(`Server is live on port: ${PORT}`);
    });
}

startserver();