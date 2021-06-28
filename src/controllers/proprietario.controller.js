import ProprietarioService from "../services/proprietario.service.js"

async function createProprietario(req, res, next) {
    try {
        let proprietario = req.body;
        if (!proprietario.nome || !proprietario.telefone) {
            throw new Error("Nome e telefone são obrigatório!");
        }
        res.send(await ProprietarioService.createProprietario(proprietario));
        logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`);
    } catch (err) {
        next(err);
    }
}
async function getProprietarios(req, res, next) {
    try {
        res.send(await ProprietarioService.getProprietarios());
        logger.info(`GET /proprietario`);
    } catch (err) {
        next(err);
    }
}
async function getProprietario(req, res, next) {
    try {
        const id = req.params.id;
        res.send(await ProprietarioService.getProprietario(id));
        logger.info(`GET /proprietario ${id}`);
    } catch (err) {
        next(err);
    }
}
async function updateProprietario(req, res, next) {
    try {
        let proprietario = req.body;
        if (!proprietario.proprietarioId || !proprietario.nome || !proprietario.telefone) {
            throw new Error("proprietarioId, nome e telefone são obrigatório!");
        }
        proprietario = await ProprietarioService.updateProprietario(proprietario);
        res.send(proprietario);
        logger.info(`PUT /proprietario ${JSON.stringify(proprietario)}`);
    } catch (err) {
        next(err);
    }
}
async function deleteProprietario(req, res, next) {
    try {
        const id = req.params.id;
        await ProprietarioService.deleteProprietario(id)
        res.end();
        logger.info(`DELETE /proprietario ${id}`);
    } catch (err) {
        next(err);
    }
}
export default {
    createProprietario,
    getProprietarios,
    getProprietario,
    updateProprietario,
    deleteProprietario,
}