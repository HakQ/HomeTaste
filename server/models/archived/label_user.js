//NOT IN USED FOR NOW!!
module.exports = (sequelize, DataTypes) => {
  const UserLabel = sequelize.define('userLabel', 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

  });

  UserLabel.associate = (models) => {
    models.UserLabel.belongsTo(models.User);
  }

  return UserLabel;
}