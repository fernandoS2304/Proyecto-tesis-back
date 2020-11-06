const httpStatus = require('http-status-codes');
const Usuario = require('../models/Usuario');
const Persona = require('../models/Persona');
const Poblador = require('../models/Poblador');
const Responsable = require('../models/Responsable');

module.exports = {
    async agregarUsuarioPoblador(request, response){
        
        const pers = request.body.datosIniciales;
        
        const data = await Persona.CrearPersona(pers);
        
        
        const usua = {...pers,personaId: data.id};
        
        const data2 = await Usuario.CrearUsuarioPoblador(usua);
        
        const pobl = {...usua,usuarioId: data2.id};
        
        const data3 = await Poblador.CrearPoblador(pobl);
        
        return response.status(httpStatus.OK).json({
            message: data3 !== null ? 'OK' : 'BAD',
            payload: data3,
        });
    },

    async agregarUsuarioResponsable(request, response){
        
        const pers = request.body.datosIniciales;
        const data = await Persona.CrearPersona(pers);
        const usua = {...pers, personaId: data.id};
        const data2 = await Usuario.CrearUsuarioResponsable(usua);
        const resp = {...usua, usuarioId: data2.id};
        const data3 =  await Responsable.CrearResponsable(resp);
        return response.status(httpStatus.OK).json({
            message: data3 !== null ? 'OK' : 'BAD',
            payload: data3,
        });
    },

    async login(request,response){
        const user = request.body;
        const data = await Usuario.GetUsuarioByUsername(user.nombreUsuario);
        if(data === null){
            return response.status(500).json({
                message: 'Usuario no encontrado',
                payload: data,
            });
        }else{
            if(user.contrasena !== data.contrasena){
                return response.status(500).json({
                    message: 'Contrasena incorrecta',
                    payload: null,
                }); 
            }else{
                return response.status(httpStatus.OK).json({
                    message: 'OK',
                    payload: data,
                });
            }
        }
    }
}