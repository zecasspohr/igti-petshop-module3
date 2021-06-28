import express from "express";
import PostController from "../controllers/post.controller.js";
const router = express.Router();

router.post("/comentario", PostController.createComentario);

router.post("/", PostController.createPost);
router.get("/", PostController.getPosts);
router.get("/:id", PostController.getPost);
router.put("/", PostController.updatePost);
router.delete("/:id", PostController.deletePost);

export default router;