module.exports = (sequelize,DataTypes)=>{
	const Recipe = sequelize.define("Recipe",
	{
		name:{
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate:{
				notEmpty:true,
			},
		},
		calories:{
			allowNull: true,
			type: DataTypes.INTEGER,
		},
		time: {
		  allowNull: true,
	      type: DataTypes.DATE,
	    },
	   	timeEnd: {
		  allowNull: true,
	      type: DataTypes.DATE,
	    },
	    serves:{
	    	allowNull: true,
			type: DataTypes.INTEGER,
		},
		minuteNeeded:{
			allowNull: true,
			type: DataTypes.INTEGER,
		},
		description:{
      		type: DataTypes.TEXT,
			allowNull: true,
		},
	    instruction:{
	    	type: DataTypes.TEXT,
			allowNull: true,
	    },
	    ingredient:{
	    	type: DataTypes.STRING,
	    	allowNull: true,
		},
		categories:{
	    	type: DataTypes.STRING,
	    	allowNull: true,
		},

		private:{
			type: DataTypes.BOOLEAN,
			allowNull: true,
		},

		//photo{}
	});

	Recipe.associate = (models)=>{
		models.Recipe.belongsTo(models.User);
	}

	return Recipe;
}