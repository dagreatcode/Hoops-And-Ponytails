module.exports = function(sequelize, DataTypes) {

    var Team = sequelize.define("Team",{
        team_name: {
            type: DataTypes.STRING
        }, 
        user_id: {
            type: DataTypes.STRING
        } 
    },{
        timestamps: false
      }
    );

    Team.associate = function(models) {
        Team.hasMany(models.Player, {
            // through: "player",
            foreignKey: "user_id"
        });
      };
    
      return Team;

};