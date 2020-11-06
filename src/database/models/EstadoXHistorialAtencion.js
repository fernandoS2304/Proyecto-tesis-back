module.exports = (sequelize,DataTypes) => {
    const EstadoXHistorialAtencion = sequelize.define('EstadoXHistorialAtenciones', {
        estadoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {    
              model: 'Estados',
              key: 'id'
            }
        },
        historialAtencionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {         
              model: 'HistorialAtenciones',
              key: 'id'
            }
        },
    });
    EstadoXHistorialAtencion.associate = function (models){
        EstadoXHistorialAtencion.belongsTo(models.Estado,{foreignKey: 'estadoId', as: 'estado'})
    };
    EstadoXHistorialAtencion.associate = function (models){
        EstadoXHistorialAtencion.belongsTo(models.HistorialAtencion,{foreignKey: 'historialAtencionId', as: 'historialatencion'})
    };
    return EstadoXHistorialAtencion;
}