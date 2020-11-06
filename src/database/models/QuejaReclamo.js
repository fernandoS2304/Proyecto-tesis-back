module.exports = (sequelize,DataTypes) => {
    const QuejaReclamo = sequelize.define('QuejaReclamos', {
        titulo:{
            allowNull: false,
            type: DataTypes.STRING
        },
        direccion:{
            allowNull: false,
            type: DataTypes.STRING
        },
        departamento:{
            allowNull: false,
            type: DataTypes.STRING
        },
        provincia:{
            allowNull: false,
            type: DataTypes.STRING
        },
        distrito:{
            allowNull: false,
            type: DataTypes.STRING
        },
        sucesos:{
            allowNull: true,
            type: DataTypes.TEXT
        },
        fechaCreacion:{
            allowNull: false,
            type: DataTypes.DATE
        },
        pobladorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {        
              model: 'Pobladores',
              key: 'id'
            }
        },
        evidenciasId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'Evidencias',
              key: 'id'
            }
        },
        categoriaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {         
              model: 'Categorias',
              key: 'id'
            }
        },
        
    });
    QuejaReclamo.associate = function (models){
        QuejaReclamo.belongsTo(models.Pobladore,{foreignKey: 'pobladorId', as: 'poblador'})
    };
    QuejaReclamo.associate = function (models){
        QuejaReclamo.belongsTo(models.Evidencia,{foreignKey: 'evidenciasId', as: 'evidencia'})
    };
    QuejaReclamo.associate = function (models){
        QuejaReclamo.belongsTo(models.Categoria,{foreignKey: 'categoriaId', as: 'categoria'})
    };
    QuejaReclamo.associate = function (models){
        QuejaReclamo.hasMany(models.HistorialAtencion, {as: 'historialatencion'})
    };
    return QuejaReclamo;
}