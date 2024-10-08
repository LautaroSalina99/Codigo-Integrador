// controllers/eventController.js
const Event = require('../models/Event');

// Crear un evento
exports.createEvent = (req, res) => {
    Event.create(req.body)
        .then(event => res.json(event))
        .catch(error => res.status(500).send(error));
};

// Obtener todos los eventos
exports.getEvents = (req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(error => res.status(500).send(error));
};