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
	});

	Recipe.associate = (models)=>{
		models.Recipe.belongsTo(models.User);
		models.Recipe.belongsTo(models.Meal);
	}

	return Recipe;
}