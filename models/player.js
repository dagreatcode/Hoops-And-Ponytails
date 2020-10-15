module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        api_player_id: {
            type: DataTypes.STRING
        },
        team_id: {
        type: DataTypes.INTERGER
      },
        player_name: {
        type: DataTypes.TEXT
      }, 
      jersey_number: {
          type: DataTypes.INTERGER
      }, 
      season_points: {
          type: DataTypes.INTERGER
      }
    });
  
    Player.associate = function(models) {
      
      Player.belongsTo(models.Team, {
        foreignKey: {
          allowNull: true
        }
      });
    };
  
    return Player;
  };
  