module.exports = (sequelize,DataTypes)=>{
	const Recipe = sequelize.define("Recipe",
	{
		name:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				notEmpty:true,
			},
		},
		slug:{
			type: DataTypes.STRING,
			allowNull: false,
			unique: "compositeIndex",
			validate:{
				notEmpty:true,
			},
		},
		creator:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				notEmpty:true,
			},
		}
	});

	Recipe.associate = (models)=>{
		models.Recipe.belongsTo(models.User);
		models.Recipe.belongsTo(models.Meal);
	}

	return Recipe;
}