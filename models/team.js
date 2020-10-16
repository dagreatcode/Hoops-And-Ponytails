module.exports = function(sequelize, DataTypes) {

    var Team = sequelize.define("Team",{
        team_name: {
            type: DataTypes.STRING
        }, 
        player_number: {
            type: DataTypes.INTEGER
        }, 
        api_player_id: {
            type: DataTypes.STRING
        }, 
        player_id:{
            type: DataTypes.INTEGER
        }, 
        user_id: {
            type: DataTypes.INTEGER
        } 
    });

    Team.associate = function(models) {
        Team.belongsToMany(models.Player, {
            through: "player",
            foreignKey: "user_id",
        });
      };
    
      return Team;

};