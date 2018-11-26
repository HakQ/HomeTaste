//NOT IN USE FOR NOW!
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('ingredient', 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Ingredient.associate = (models) => {
    models.Ingredient.belongsTo(models.Recipe);
  }

  return Ingredient;
}