module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        api_player_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        team_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
        player_name: {
        type: DataTypes.TEXT
      }, 
      jersey_number: {
          type: DataTypes.INTEGER
      }, 
      season_points: {
          type: DataTypes.DECIMAL(10,2)
      },
      player_height: {
          type: DataTypes.DECIMAL(10,2)
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
  