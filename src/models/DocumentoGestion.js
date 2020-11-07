const Database = require('../models');

const {DocumentoGestion} = Database;

DocumentoGestion.CrearDocGestion = async function (payload){
    try{
        return await DocumentoGestion.create(payload);
    }catch (error){
        console.log("Evidencia error", error)
        return null;
    }
};

DocumentoGestion.ObtenerDocGestion = async function(idDocumentoGestion){
    return await DocumentoGestion.findOne({where:{id:idDocumentoGestion}});
}

module.exports = DocumentoGestion;