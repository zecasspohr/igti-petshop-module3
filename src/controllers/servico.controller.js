import ServicoService from "../services/servico.service.js"

async function createServico(req, res, next) {
    try {
        let servico = req.body;
        if (!servico.descricao || !servico.valor || !servico.animalId) {
            throw new Error("Descricao, valor e animalId são obrigatório!");
        }
        res.send(await ServicoService.createServico(servico));
        logger.info(`POST /servico - ${JSON.stringify(servico)}`);
    } catch (err) {
        next(err);
    }
}
async function getServicos(req, res, next) {
    try {
        res.send(await ServicoService.getServicos(req.query.proprietarioId));
        logger.info(`GET /servico`);
    } catch (err) {
        next(err);
    }
}
async function getServico(req, res, next) {
    try {
        const id = req.params.id;
        res.send(await ServicoService.getServico(id));
        logger.info(`GET /servico ${id}`);
    } catch (err) {
        next(err);
    }
}
async function updateServico(req, res, next) {
    try {
        let servico = req.body;
        if (!servico.servicoId || !servico.descricao || !servico.valor || !servico.animalId) {
            throw new Error("servicoID, descricao, valor e animalId são obrigatório!");
        }
        servico = await ServicoService.updateServico(servico);
        res.send(servico);
        logger.info(`PUT /servico ${JSON.stringify(servico)}`);
    } catch (err) {
        next(err);
    }
}
async function deleteServico(req, res, next) {
    try {
        const id = req.params.id;
        await ServicoService.deleteServico(id)
        res.end();
        logger.info(`DELETE /servico ${id}`);
    } catch (err) {
        next(err);
    }
}
export default {
    createServico,
    getServicos,
    getServico,
    updateServico,
    deleteServico,
}