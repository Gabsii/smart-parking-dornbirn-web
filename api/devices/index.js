const db = require('../../backend/connection');
const Device = require('../../backend/models/Device');
require('mysql2');

export default async (req, res) => {
  try {
    const devices = await Device.findAll({
      attributes: ['id', 'isParked', 'latitude', 'longitude', 'updatedAt'],
    });
    res.send(devices);
  } catch (error) {
    res.status(500).send(error);
  }
};
