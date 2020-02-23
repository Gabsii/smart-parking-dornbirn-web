const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./connection');
const Device = require('./models/Device');

// config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/device', async function(req, res, next) {
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
    }).then(([device, created]) => {
      if (!created) {
        device.latitude = body.metadata.latitude;
        device.longitude = body.metadata.longitude;
        device.isParked = body.payload_fields.data;
        device.save();
      }
    });
  }
  res.end();
  next();
});

app.get('/device/:id', async function(req, res, next) {
  try {
    const device = await Device.findByPk(req.params.id);
    res.send(device);
  } catch (error) {
    res.status(500).send(error);
  }
  next();
});

app.get('/device', async function(_req, res, next) {
  try {
    const devices = await Device.findAll({
      attributes: ['id', 'isParked', 'latitude', 'longitude', 'updatedAt'],
    });
    res.send(devices);
  } catch (error) {
    res.status(500).send(error);
  }
  next();
});

sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log('Backend was started');
  });
});
