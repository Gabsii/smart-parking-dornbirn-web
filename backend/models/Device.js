const Sequelize = require('sequelize');

module.exports = sequelize.define(
  'Device',
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    deviceId: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    isParked: {
      type: Sequelize.BOOLEAN(),
      allowNull: false,
      defaultValue: 0,
    },
    isActive: {
      type: Sequelize.BOOLEAN(),
      allowNull: false,
      defaultValue: 1,
    },
    latitude: {
      type: Sequelize.FLOAT(),
      unique: 'locationIndex',
    },
    longitude: {
      type: Sequelize.FLOAT(),
      unique: 'locationIndex',
    },
    createdAt: {
      type: Sequelize.DATE(),
    },
    updatedAt: {
      type: Sequelize.DATE(),
    },
  },
  {
    timestamps: true,
  },
);
