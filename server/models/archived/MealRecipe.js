module.exports = (sequelize,DataTypes)=>{
	const MealRecipe = sequelize.define("MealRecipe",{});
	return MealRecipe;
}