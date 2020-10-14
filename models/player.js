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
      player_height: {
        type: DataTypes.TEXT 
      }, 
      jersey_number: {
          type: DataTypes.INTEGER
      }, 
      season_points: {
          type: DataTypes.INTEGER
      }, 
      three_point_percent: {
          type: DataTypes.INTEGER
      }, 
      field_goal_percent: { 
          type: DataTypes.INTEGER
      }, 
      assist:{
          type: DataTypes.INTEGER
      }, 
      turnover:{
          type: DataTypes.INTEGER
      }, 
      blocks:{
          type:DataTypes.INTEGER
      }, 
      steals:{
          type:DataTypes.INTEGER
      }, 
      rebounds: {
          type:DataTypes.INTEGER
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
  