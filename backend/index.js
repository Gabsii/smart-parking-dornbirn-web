const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const { prisma } = require('../prisma/generated/prisma-client');

app.use(express.json()) 

app.post('/devicedata', async function(req, res, next){
    const updatedOrCreatedUser = await prisma.upsertDevice({
        where: {
            deviceAddr: req.body.dev_id
        },
        update: {
            location: {
                lat: req.body.metadata.latitude,
                long: req.body.metadata.longitude,
            },
            isParked: req.body.payload_raw
        },
        create: {
            deviceAddr: req.body.dev_id,
            location: {
                lat: req.body.metadata.latitude,
                long: req.body.metadata.longitude,
            },
            isParked: req.body.payload_raw
        }
    });
    res.send(updatedOrCreatedUser);
    next();
});

app.listen(process.env.BACKEND_PORT, () => {
    console.log('Backend was started');
});