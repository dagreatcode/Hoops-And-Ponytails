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
      player_height: {
        type: DataTypes.TEXT 
      }, 
      jersey_number: {
          type: DataTypes.INTERGER
      }, 
      season_points: {
          type: DataTypes.INTERGER
      }, 
      three_point_percent: {
          type: DataTypes.INTERGER
      }, 
      field_goal_percent: { 
          type: DataTypes.INTERGER
      }, 
      assist:{
          type: DataTypes.INTERGER
      }, 
      turnover:{
          type: DataTypes.INTERGER
      }, 
      blocks:{
          type:DataTypes.INTERGER
      }, 
      steals:{
          type:DataTypes.INTERGER
      }, 
      rebounds: {
          type:DataTypes.INTERGER
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
  