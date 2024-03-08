const mongoose = require('mongoose')


const ConnectToDatabase = async () => {
    mongoose.connect('mongodb+srv://gautam:gautammehta1999@cluster0.xorxp.mongodb.net/nextjs-blog-udemy')
        .then(() => console.log("MongoDB is connected successfully.."))
        .catch((err) => console.log(err))
}

export default ConnectToDatabase