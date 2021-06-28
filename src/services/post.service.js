import PostRepository from "../repositories/post.repository.js";

async function createPost(post) {
    return await PostRepository.createPost(post);
}
async function getPosts() {
    return await PostRepository.getPosts();
}
async function getPost(id) {
    return await PostRepository.getPost(id);
}
async function deletePost(id) {
    return await PostRepository.deletePost(id);
}
async function updatePost(post) {
    return await PostRepository.updatePost(post);
}
async function createComentario(_id, comentario) {
    return await PostRepository.createComentario(_id, comentario);
}
export default {
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost,
    createComentario,
}