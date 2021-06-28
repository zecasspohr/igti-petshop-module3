import PostService from "../services/post.service.js"

async function createPost(req, res, next) {
    try {
        let post = req.body;
        if (!post.titulo || !post.conteudo) {
            throw new Error("Titulo e conteudo são obrigatórios!");
        }
        if (!post.comentarios) {
            post.comentarios = [];
        }
        res.send(await PostService.createPost(post));
        logger.info(`POST /post - ${JSON.stringify(post)}`);
    } catch (err) {
        next(err);
    }
}
async function getPosts(req, res, next) {
    try {
        res.send(await PostService.getPosts());
        logger.info(`GET /post`);
    } catch (err) {
        next(err);
    }
}
async function getPost(req, res, next) {
    try {
        const id = req.params.id;
        res.send(await PostService.getPost(id));
        logger.info(`GET /post ${id}`);
    } catch (err) {
        next(err);
    }
}
async function updatePost(req, res, next) {
    try {
        let post = req.body;
        if (!post._id || !post.titulo || !post.conteudo || !post.comentarios) {
            throw new Error("_id, titulo, conteudo e comentarios são obrigatório!");
        }
        post = await PostService.updatePost(post);
        res.send(post);
        logger.info(`PUT /post ${JSON.stringify(post)}`);
    } catch (err) {
        next(err);
    }
}
async function deletePost(req, res, next) {
    try {
        const id = req.params.id;
        await PostService.deletePost(id)
        res.end();
        logger.info(`DELETE /post ${id}`);
    } catch (err) {
        next(err);
    }
}

async function createComentario(req, res, next) {
    try {
        let { _id, comentario } = req.body;
        if (!_id || !comentario) {
            throw new Error("_id e comentario são obrigatórios!");
        }
        res.send(await PostService.createComentario(_id, comentario));
        logger.info(`POST /post - ${JSON.stringify(post)}`);
    } catch (err) {
        next(err);
    }
}

export default {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost,
    createComentario,
}