import ServicoRepository from "../repositories/servico.repository.js"

async function createServico(servico) {
    return await ServicoRepository.insertServico(servico);
}
async function getServicos(idProprietario) {
    if (idProprietario) {
        return await ServicoRepository.getServicoByProprietario(idProprietario);
    }
    return await ServicoRepository.getServicos();
}
async function getServico(id) {
    return await ServicoRepository.getServico(id);
}
async function deleteServico(id) {
    return await ServicoRepository.deleteServico(id);
}
async function updateServico(servico) {
    return await ServicoRepository.updateServico(servico);
}
export default {
    createServico,
    getServicos,
    getServico,
    deleteServico,
    updateServico,
}