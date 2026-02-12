// src/models/MonsterModel.js
const mongoose = require('mongoose');

const MonsterSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    clase: {
        type: String, // Ej: Wyvern Pájaro, Bestia de Colmillos
        required: true
    },
    debilidad: {
        type: String, // Ej: Fuego, Agua, Hielo
        required: true
    },
    amenaza: {
        type: Number, // Nivel de estrellas (1-10)
        required: true
    }
});

module.exports = mongoose.model('Monster', MonsterSchema);