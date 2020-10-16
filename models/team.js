module.exports = function(sequelize, DataTypes) {

    var Team = sequelize.define("Team",{
        team_name: {
            type: DataTypes.STRING
        }, 
        user_id: {
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