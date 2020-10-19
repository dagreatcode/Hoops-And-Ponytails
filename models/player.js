module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        team_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      player_name: {
        type: DataTypes.TEXT
      }, 
    }, {
      timestamps: false
    });
  
    // Player.associate = function(models) {
      
    //   Player.belongsTo(models.Team, {
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   });
    // };
  
    return Player;
  };
  

  //add playername 