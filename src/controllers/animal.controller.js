import AnimalService from "../services/animal.service.js"

async function createAnimal(req, res, next) {
    try {
        let animal = req.body;
        if (!animal.nome || !animal.tipo || !animal.proprietarioId) {
            throw new Error("Nome, tipo e proprietarioId são obrigatório!");
        }
        res.send(await AnimalService.createAnimal(animal));
        logger.info(`POST /animal - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}
async function getAnimals(req, res, next) {
    try {
        res.send(await AnimalService.getAnimals(req.query.proprietarioId));
        logger.info(`GET /animal`);
    } catch (err) {
        next(err);
    }
}
async function getAnimal(req, res, next) {
    try {
        const id = req.params.id;
        res.send(await AnimalService.getAnimal(id));
        logger.info(`GET /animal ${id}`);
    } catch (err) {
        next(err);
    }
}
async function updateAnimal(req, res, next) {
    try {
        let animal = req.body;
        if (!animal.animalId || !animal.nome || !animal.tipo || !animal.proprietarioId) {
            throw new Error("ID, Nome, tipo e proprietarioId são obrigatório!");
        }
        animal = await AnimalService.updateAnimal(animal);
        res.send(animal);
        logger.info(`PUT /animal ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}
async function deleteAnimal(req, res, next) {
    try {
        const id = req.params.id;
        await AnimalService.deleteAnimal(id)
        res.end();
        logger.info(`DELETE /animal ${id}`);
    } catch (err) {
        next(err);
    }
}
export default {
    createAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
    deleteAnimal,
}