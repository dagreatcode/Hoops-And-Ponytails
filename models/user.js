module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: {
          type: DataTypes.STRING
         
        },
        loggedin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        }  

      });

      User.associate = function (models) {
        User.belongsToMany(models.Team, {
          through: "team",
          foreignKey: "user_id",
        });
      };
      return User;
  };
  //username
  //email