module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipe', 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    instruction:{
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    creator: {
      type: DataTypes.STRING
    },
    likes: {
      type: DataTypes.INTEGER,
    },
    label:{
      type: DataTypes.STRING,
    },
    ingredient:{
      type: DataTypes.STRING,
    },
  });

  Recipe.associate = (models) => {
    models.Recipe.belongsTo(models.User);
    models.Recipe.belongsTo(models.Meal);
    //models.Recipe.hasMany(models.Ingredient);
    //models.Recipe.hasMany(models.RecipeLabel);
  }

  return Recipe;
}