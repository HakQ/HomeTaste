module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('meal', 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    comment:{
      type: DataTypes.TEXT,
    },
    time: {
      type: DataTypes.DATE,
    },
    serve:{
      type: DataTypes.INTEGER,
    },
    numbDish:{
      type: DataTypes.INTEGER,
    },
    creator:{
      allowNull: false,
      type: DataTypes.STRING
    },
    slug:{
      allowNull: false,
      type: DataTypes.STRING
    },
  });

  Meal.associate = (models) => {
    models.Meal.belongsTo(models.User);
    models.Meal.hasMany(models.Recipe);
  }

  return Meal;
}