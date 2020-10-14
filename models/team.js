module.exports = function(sequelize, DataTypes) {

    var Team = sequelize.define("Team",{
        team_name: {
            type: DataTypes.STRING
        }, 
        player_number: {
            type: DataTypes.INTERGER
        }, 
        api_player_id: {
            type: DataTypes.STRING
        }, 
        player_id:{
            type: DataTypes.INTERGER
        }, 
        username: {
            type: DataTypes.STRING
        } 
    });

    team_name.associate = function(models) {
      
        Team.belongsTo(models.Player, {
          foreignKey: {
            allowNull: true
          }
        });
      };
    
      return Team;

};