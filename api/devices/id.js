const db = require('../../backend/connection');
const Device = require('../../backend/models/Device');
require('mysql2');

export default async ({ query: { id } }, res) => {
  try {
    const device = await Device.findByPk(id);
    res.send(device);
  } catch (error) {
    res.status(500).send(error);
  }
};
