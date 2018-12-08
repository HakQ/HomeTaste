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
		calories:{
			type: DataTypes.INTEGER,
		},
		time: {
	      type: DataTypes.DATE,
	    },
	    serves:{
			type: DataTypes.INTEGER,
		},
		minuteNeeded:{
			type: DataTypes.INTEGER,
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
	    ingredient:{
	    	type: DataTypes.STRING,
		},
		private:{
			type: DataTypes.BOOLEAN,
		},
		//photo{}
	});

	Recipe.associate = (models)=>{
		models.Recipe.belongsTo(models.User);
	}

	return Recipe;
}