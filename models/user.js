module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: {
          type: DataTypes.STRING
         
        },
        loggedin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        }, 
    

      }, {
        timestamps: false
      }
      );

      User.associate = function (models) {
        User.hasMany(models.Team);
      };
      return User;
  };
  //username
  //email