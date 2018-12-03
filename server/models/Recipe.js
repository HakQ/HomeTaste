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
		creator:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				notEmpty:true,
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
	    likes: {
	    	type: DataTypes.INTEGER,
	    },
	    label:{
	    	type: DataTypes.STRING,
	    },
	    ingredient:{
	    	type: DataTypes.STRING,
		},
		private:{
			type: DataTypes.BOOLEAN,
		},
		/*
		calories:{
			type: DataTypes.INTEGER,
		},
		minuteNeeded{
			type: DataTypes.INTEGER,
		},
		serves{
			type: DataTypes.INTEGER,
		},
		photo{}
		*/
	});

	Recipe.associate = (models)=>{
		models.Recipe.belongsTo(models.User);
		models.Recipe.belongsToMany(models.Meal,{through: "MealRecipe"});
	}

	return Recipe;
}