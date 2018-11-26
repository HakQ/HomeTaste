//NOT IN USE FOR NOW!!
module.exports = (sequelize, DataTypes) => {
  const RecipeLabel = sequelize.define('recipeLabel', 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  RecipeLabel.associate = (models) => {
    models.RecipeLabel.belongsTo(models.Recipe);
  }

  return RecipeLabel;
}