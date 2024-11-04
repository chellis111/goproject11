const mongoose = require('mongoose');


// connect to mongodb database
const connectDb = async () => {
    await mongoose.connect("mongodb://localhost:27017/blog-api")
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDb;