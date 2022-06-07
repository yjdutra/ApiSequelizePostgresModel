const { DataTypes, Model } = require("sequelize");

class NomeDoModel extends Model {
  static init(sequelize) {
    super.init(
      {
        parametro1: DataTypes.INTEGER,
        parametro2: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = NomeDoModel;