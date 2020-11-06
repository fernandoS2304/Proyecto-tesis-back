module.exports = (sequelize,DataTypes) => {
    const HistorialAtencion = sequelize.define('HistorialAtenciones', {
        fechaInicio:{
            allowNull: true,
            type: DataTypes.DATE
        },
        fechaFin:{
            allowNull: true,
            type: DataTypes.DATE
        },
        comentario:{
            allowNull: true,
            type: DataTypes.TEXT
        },
        responsableId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Responsables',
              key: 'id'
            }
        },
        quejaReclamoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            references: {         
              model: 'QuejaReclamos',
              key: 'id'
            }
        },
        documentoGestionId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {         
              model: 'DocumentoGestiones',
              key: 'id'
            }
        },
    });
    HistorialAtencion.associate = function (models){
        HistorialAtencion.belongsTo(models.Responsable,{foreignKey: 'responsableId', as: 'responsable'})
    };
    HistorialAtencion.associate = function (models){
        HistorialAtencion.belongsTo(models.QuejaReclamo,{foreignKey: 'quejaReclamoId', as: 'quejareclamo', primaryKey: false, constraints: true})
    };
    HistorialAtencion.associate = function (models){
        HistorialAtencion.belongsTo(models.DocumentoGestion,{foreignKey: 'documentoGestionId', as: 'documentogestion'})
    };
    HistorialAtencion.associate = function (models){
        HistorialAtencion.hasMany(models.EstadoXHistorialAtencion, {as: 'estadoxhistorialatencion'})
    };
    return HistorialAtencion;
}