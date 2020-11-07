const httpStatus = require('http-status-codes');
const HistorialAtencion = require('../models/HistorialAtencion');
const Responsable = require('../models/Responsable');
const EstadoHistorialAtencion = require('../models/EstadoHistorialAtencion');
const Usuario = require('../models/Usuario');
const Persona = require('../models/Persona');
const DocumentoGestion = require('../models/DocumentoGestion');
const Email = require('./transporter-factory');
const templateEmailResponsable = require('./templateAsignarResponsable');


module.exports = {
    async agregarHistorialAtencion(request, response){
        var data = request.body;
        const cat = data.categoriaId;
        let area = '';
        //const respo = {};
        let rpta = {};
        if (cat === 1){
            area = "Finanzas";            
        }else if (cat === 2){
            area = "Legal";
        }else if (cat === 3){
            area = "Recursos humanos";            
        }else if (cat === 4){        
            area = "Logistica";            
        }else if (cat === 6){
            area = "Medio ambiente";            
        }else if (cat === 7){
            area = "Recursos humanos";            
        }else if (cat === 8){
            area = "Operaciones";            
        }else if (cat === 9){
            area = "Seguridad";            
        }else{
            area = "Relaciones comunitarias";            
        };
        let respo = await Responsable.ListarResponsableArea(area);
        data = {...data, responsableId: respo.id};
        rpta = await HistorialAtencion.CrearHistorialAtencion(data);
        let usua = await Usuario.GetUsuarioByUsuarioId(respo.usuarioId);
        let nombre = await Persona.GetPersonaById(usua.personaId); 

        const titulo = "Asignacion de Ticket"
        const mailOptions = {
            from: "gestion.queja.reclamo@gmail.com",
            to: nombre.correo,
            subject: "Ticket de Queja - Reclamo asignado",
            html: templateEmailResponsable(titulo, data.quejaReclamoId),
          };
        await Email.sendEmail(mailOptions);
        
        let estado = {
            estadoId: 1
        };
        estado = {...estado, historialAtencionId: rpta.id};
        const estadoXHistorial = await EstadoHistorialAtencion.Crear(estado);
                
        return response.status(httpStatus.OK).json({
            message: rpta !== null ? 'OK' : 'BAD',
            payload: nombre,
        });
    },

    async actualizarResponsable(request, response){
        let data = request.body;
        const area = data.area;
        const respo = await Responsable.ListarResponsableArea(area);
        console.log('Actualizar: ', respo);
        data = {...data, responsableId: respo.id};
        const rpta = await HistorialAtencion.CambiarResponsable(data);
        return response.status(httpStatus.OK).json({
            message: rpta !== null ? 'OK' : 'BAD',
            payload: rpta,
        });
    },

    async asignarmeTicket(request, response){
        let data = request.body;
        data = {...data, fechaInicio: new Date()}
        const rpta = await HistorialAtencion.AsignarTicket(data)
        const estado = {
            historialAtencionId: data.id,
        };
        const rpta2 = await EstadoHistorialAtencion.Asignar(estado)
        return response.status(httpStatus.OK).json({
            message: rpta !== null ? 'OK' : 'BAD',
            payload: rpta,
        });
    },

    async devolverAlCliente(request, response){
        let data = request.body;
        data = {...data,fechaFin: new Date()}
        console.log("Devolver al cliente data: ", data)
        const rpta = await HistorialAtencion.DevolverCliente(data);
        const estado = {
            historialAtencionId: data.id,
        };
        const rpta2 = await EstadoHistorialAtencion.Devolver(estado)
        return response.status(httpStatus.OK).json({
            message: rpta !== null ? 'OK' : 'BAD',
            payload: rpta,
        });
    },

    async aceptarSolucion(request, response){
        const data = request.body;
        const estado = {
            historialAtencionId: data.id,
        };
        const rpta = await EstadoHistorialAtencion.Solucionar(estado);
        return response.status(httpStatus.OK).json({
            message: rpta !== null ? 'OK' : 'BAD',
            payload: rpta,
        });
    },

    async cancelarTicket(request, response){
        const data = request.body;
        const estado = {
            historialAtencionId: data.id,
        };
        const rpta = await EstadoHistorialAtencion.Cancelar(estado);
        return response.status(httpStatus.OK).json({
            message: rpta !== null ? 'OK' : 'BAD',
            payload: rpta,
        });
    },

    async guardarGestion(request, response){
        const data = request.body;
        const rpta = await HistorialAtencion.Guardar(data);
        return response.status(httpStatus.OK).json({
            message: rpta !== null ? 'OK' : 'BAD',
            payload: rpta,
        });
    },

    async listarHistorialAtencion(request, response){
        const {idQuejaReclamo} = request.params
        let data = await HistorialAtencion.ListarByQuejasId(idQuejaReclamo);
        
        for(var i=0; i<data.length; i++){
            const resp = await Responsable.GetResponsableById(data[i].responsableId);
            const usua = await Usuario.GetUsuarioByUsuarioId(resp.usuarioId);
            const pers = await Persona.GetPersonaById(usua.personaId);
            
            data[i].dataValues.nombre = pers.nombre
            data[i].dataValues.apellidoP = pers.apellidoP
            data[i].dataValues.apellidoM = pers.apellidoM

            const docG = await DocumentoGestion.ObtenerDocGestion(data[i].documentoGestionId);
            if(docG === null){
                data[i].dataValues.fileName = ''
                data[i].dataValues.link = '#'
            }else{
                data[i].dataValues.fileName = docG.titulo
                data[i].dataValues.link = docG.documento
            }
        }

        return response.status(httpStatus.OK).json({
            message: 'OK',
            payload: data === null ? [] : data,
        });
    },

    

    async cambiarUsuarioResponsable(request, response){
        let data = request.body;
        let rpta = {};
        let cambio ={}
        const area  = data.area;
        data = {...data,fechaFin: new Date()}
        const devo = await HistorialAtencion.DevolverCliente(data);
        let respo = await Responsable.ListarResponsableArea(area);
        cambio.responsableId = respo.id;
        cambio.quejaReclamoId = data.quejaReclamoId;
        console.log('Cambiar usuario responsable: ', cambio)
        rpta = await HistorialAtencion.CrearHistorialAtencion(cambio);
        console.log('Cambiar usuario responsable rpta: ', rpta)
        let usua = await Usuario.GetUsuarioByUsuarioId(respo.usuarioId);
        let nombre = await Persona.GetPersonaById(usua.personaId); 

        const titulo = "Asignacion de Ticket"
        const mailOptions = {
            from: "gestion.queja.reclamo@gmail.com",
            to: nombre.correo,
            subject: "Ticket de Queja - Reclamo asignado",
            html: templateEmailResponsable(titulo, data.quejaReclamoId),
          };
        await Email.sendEmail(mailOptions);
        
        let estado = {
            estadoId: 1
        };
        
        estado = {...estado, historialAtencionId: rpta.id};
        const estadoXHistorial = await EstadoHistorialAtencion.Crear(estado);
                
        return response.status(httpStatus.OK).json({
            message: rpta !== null ? 'OK' : 'BAD',
            payload: nombre,
        });
    },

    async guardarDocGestion(request,response){
        const data = request.body;
        let docGestion = {};
        docGestion.titulo = data.fileName;
        docGestion.documento = data.link;
        
        const rpta = await DocumentoGestion.CrearDocGestion(docGestion);

        let guardar = {}
        guardar.idDocumentoGestion = rpta.id;
        guardar.id = data.id;
        
        const rpta2 = await HistorialAtencion.GuardarDocGestion(guardar);

        return response.status(httpStatus.OK).json({
            message: 'OK',
            payload: rpta2,
        });
    },

}
