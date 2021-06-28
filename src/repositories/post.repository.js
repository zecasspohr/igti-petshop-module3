import PostSchema from "../schema/post.schema.js";
import { connect } from "./mongo.db.js";

async function createPost(post) {
    try {
        const mongoose = await connect();
        const Post = mongoose.model("post", PostSchema);
        post = new Post(post);
        await post.save();
    } catch (error) {
        throw error;
    }
}

async function getPosts() {
    try {
        const mongoose = await connect();
        const Post = mongoose.model("post", PostSchema);
        const query = Post.find({});
        return await query.exec();
    } catch (error) {
        throw error;
    }
}

async function getPost(_id) {
    try {
        const mongoose = await connect();
        const Post = mongoose.model("post", PostSchema);
        const query = Post.findOne({ "_id": _id });
        return await query.exec();
    } catch (error) {
        throw error;
    }
}

async function updatePost(post) {
    try {
        const mongoose = await connect();
        const Post = mongoose.model("post", PostSchema);
        await Post.findOneAndUpdate({ _id: post._id }, post);
    } catch (error) {
        throw error;
    }
}
async function deletePost(_id) {
    try {
        const mongoose = await connect();
        const Post = mongoose.model("post", PostSchema);

    } catch (error) {
        throw error;
    }
}
async function createComentario(_id, comentario) {
    try {
        const post = await getPost(_id);
        post.comentarios.push(comentario);

        return await updatePost(post);
    } catch (error) {
        throw error;
    }
}

export default {
    createPost,
    getPosts,
    getPost,
    deletePost,
    createComentario,
}