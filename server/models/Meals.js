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
		comment:{
	      type: DataTypes.TEXT,
	    },
	    time: {
	      type: DataTypes.DATE,
	    },
	});

	Meal.associate = (models)=>{
		models.Meal.belongsTo(models.User);
		models.Meal.hasMany(models.Recipe);
	}

	return Meal;
}