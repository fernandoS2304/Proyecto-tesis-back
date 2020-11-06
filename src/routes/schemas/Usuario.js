const { Joi, celebrate } = require('./Joi');

const agregarUsuarioPoblador = celebrate({
    body: Joi.object().keys({
        nombre: Joi.string().required(),
        apellidoP: Joi.string().required(),
        apellidoM: Joi.string().required(),
        correo: Joi.string().required(),
        telefono: Joi.string().required(),
        fechaNacimiento: Joi.string().required(),
        dni: Joi.string().required(),
        direccion: Joi.string().required(),
        nombreUsuario: Joi.string().required(),
        constrasena: Joi.string().required(),
        rolesId: Joi.number().required(),
    }),
});

module.exports = {
    agregarUsuarioPoblador,
};