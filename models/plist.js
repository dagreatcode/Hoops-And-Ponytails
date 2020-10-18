module.exports = function (sequelize, DataTypes) {
    const PlayerList= sequelize.define("PlayerList", {
           name:  {
          type: DataTypes.STRING
        }, 
        avg_points:{
            type: DataTypes.DECIMAL(10,2)
        },
        avg_rebounds:{
            type: DataTypes.DECIMAL(10,2)
        },
        avg_assists:{
            type: DataTypes.DECIMAL(10,2)
        },
        avg_steals:{
            type: DataTypes.DECIMAL(10,2)
        },
        avg_blocks:{
            type: DataTypes.DECIMAL(10,2)
        }
      });

   
      return PlayerList;
  };