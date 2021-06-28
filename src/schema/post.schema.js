import mongoose from "mongoose";
import Comentario from "./comentario.schema.js";

const Post = new mongoose.Schema(
    {
        titulo: String,
        conteudo: String,
        comentarios: [Comentario]
    }, { collection: "post" }
);

export default Post;