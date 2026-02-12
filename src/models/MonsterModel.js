const mongoose = require('mongoose');

const MonsterSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    clase: {
        type: String,
        required: true
    },
    debilidad: {
        type: String,
        required: true
    },
    amenaza: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Monster', MonsterSchema);
