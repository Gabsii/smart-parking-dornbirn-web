const db = require('../../backend/connection');
const Device = require('../../backend/models/Device');
require('mysql2');

export default async (req, res) => {
  if (
    req.headers.authorization &&
    req.headers.authorization === process.env.AUTHORIZATION
  ) {
    const { body } = req;
    Device.findOrCreate({
      where: {
        deviceId: body.dev_id,
      },
      defaults: {
        deviceId: body.dev_id,
        isParked: body.payload_fields.data,
        latitude: body.metadata.latitude,
        longitude: body.metadata.longitude,
      },
    })
      .then(([device, created]) => {
        if (!created) {
          device.latitude = body.metadata.latitude;
          device.longitude = body.metadata.longitude;
          device.isParked = body.payload_fields.data;
          device.save();
        }
        res.status(200).send('OK');
      })
      .catch(err => {
        res.send(err);
      });
  }
};
