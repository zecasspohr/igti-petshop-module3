import mongoose from "mongoose";

async function connect() {
    const uri = "mongodb+srv://root:1234@cluster0.ljuhr.mongodb.net/posts";
    return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

export {
    connect,
}