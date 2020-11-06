const httpStatus = require('http-status-codes');
const QuejaReclamo = require('../models/QuejaReclamo');
const Poblador = require('../models/Poblador');
const HistorialAtencion = require('../models/HistorialAtencion');
const EstadoXHistorialAtencion = require('../models/EstadoHistorialAtencion');
const Responsable = require('../models/Responsable');
const Usuario = require('../models/Usuario');
const Persona = require('../models/Persona');
const Email = require('./transporter-factory');
const EnviarArchivo = require('./EnvioDeArchivo');
const templateEmailPoblador = require('./tamplateCrearQuejaUsuario');   


module.exports = {
    async agregarQuejaReclamo(request, response){
        const pobl = request.body.datosIniciales;
        const id = pobl.idUsuario;
        const data = await Poblador.GetPobladorById(id);
        const usua = await Usuario.GetUsuarioByUsuarioId(id);
        const pers = await Persona.GetPersonaById(usua.personaId);
        const titulo = "Creacion de Ticket"
        const mailOptions = {
            from: "gestion.queja.reclamo@gmail.com",
            to: pers.correo,
            subject: "Ticket de Queja - Reclamo creado",
            html: templateEmailPoblador(titulo, pobl.titulo),
          };
        console.log("antes de email");
        await Email.sendEmail(mailOptions);
        console.log("later de email");
        const querec = {...pobl,pobladorId: data.id};
        //querec = {...querec, fechaCreacion: new Date()}
        const data2 = await QuejaReclamo.CrearQuejaReclamo(querec);
        return response.status(httpStatus.OK).json({
            message: data2 !== null ? 'OK' : 'BAD',
            payload: data2,
        });
    },
    async listarQuejaReclamoPoblador(request, response){

        const {idUsuario} = request.params
        const data = await Poblador.GetPobladorById(idUsuario);
        let rpta = await QuejaReclamo.ListarQuejaReclamoPoblador(data.id);
        
        for (var i=0; i<rpta.length;i++){
            const historial = await HistorialAtencion.ListarByQuejasId(rpta[i].id);
            const ultimo = (historial.reverse())[0];
            const estado = await EstadoXHistorialAtencion.GetEstadoXHistorialById(ultimo.id);
            console.log('Estado: ',estado.estadoId)
            console.log('rpta: ',rpta[i]);
            rpta[i].dataValues.estadoId = estado.estadoId
            //rpta[i]={...rpta[i],estadoId:estado.estadoId}
        }
                
        return response.status(httpStatus.OK).json({
            message: 'OK',
            payload: rpta === null ? [] : rpta,
        });
    },

    async listarQuejaReclamoResponsable(request, response){
        const {idUsuario} = request.params
        const resp = await Responsable.GetResponsableByUsuarioId(idUsuario);
        console.log('Responsabñe: ', resp)
        const data = await EstadoXHistorialAtencion.Listar();
        console.log('Data: ', data);
        console.log('Data longitud: ', data.length);
        var atencion = [];
        var rpta = [];
        for (var i=0; i<(data.length);i++){
            var aten = await HistorialAtencion.ListarByHistorialId(data[i].historialAtencionId,resp.id)
            if(aten !== null){
                atencion.push(aten);
                console.log('Primer for',atencion[i])
            }else{
                console.log('aten con null')
            }            
        }
        
        for (var i=0; i<(atencion.length);i++){
            console.log('Atencion: ',atencion[i])
            rpta.push(await QuejaReclamo.ListarQuejaReclamoResponsable(atencion[i].quejaReclamoId))
        }
        for (var i=0; i<rpta.length;i++){
            const historial = await HistorialAtencion.ListarByQuejasId(rpta[i].id);
            const ultimo = (historial.reverse())[0];
            const estado = await EstadoXHistorialAtencion.GetEstadoXHistorialById(ultimo.id);
            //console.log('Estado: ',estado.estadoId)
            console.log('rpta: ',rpta[i]);
            rpta[i].dataValues.estadoId = estado.estadoId
            //rpta[i]={...rpta[i],estadoId:estado.estadoId}
        }        

        return response.status(httpStatus.OK).json({
            message: 'OK',
            payload: rpta === null ? [] : rpta,
        });        
    },
    
    async guardarArchivo(request,response){
        // const file = request.body;
        // const file = request.files.file;
        //console.log(JSON.stringify(request.files.data));
        const file = request.files.data
        
        EnviarArchivo.uploadToS3(file, response);
        // setTimeout(async ()=> {
        //     console.log("guardarArchivo -> rpta", rpta)
        //     return response.status(httpStatus.OK).json({message: 'OK', payload: rpta === null ? null : rpta});
        // },10000);
    }
}