module.exports = (sequelize,DataTypes)=>{
	const Meal = sequelize.define("meal",
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

	Meal.associate = (models)=>{
		models.Meal.belongsTo(models.User);
		models.Meal.hasMany(models.Recipe);
	}

	return Meal;
}