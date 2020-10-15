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
        username: {
            type: DataTypes.STRING
        } 
    });

    // Team.associate = function(models) {
      
    //     Team.belongsTo(models.Player, {
    //       foreignKey: {
    //         allowNull: true
    //       }
    //     });
    //   };
    
      return Team;

};