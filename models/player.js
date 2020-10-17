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
          type: DataTypes.INTERGER,
          allowNull: true
      }, 
      season_points: {
          type: DataTypes.INTERGER,
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