module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        api_player_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        team_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
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