// models/Event.js
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    nombre: String,
    fecha: Date,
    lugar: String,
    descripcion: String,
    tematica: String
});

module.exports = mongoose.model('Event', EventSchema);