module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        api_player_id: {
            type: DataTypes.STRING
        },
        team_id: {
        type: DataTypes.INTEGER
      },
        player_name: {
        type: DataTypes.TEXT
      }, 
      jersey_number: {
          type: DataTypes.INTEGER
      }, 
      season_points: {
          type: DataTypes.INTEGER
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
  