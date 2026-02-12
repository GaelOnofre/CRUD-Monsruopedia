const mongoose = require('mongoose');

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect('mongodb://127.0.0.1:27017/cazadoresDB')
            .then(() => {
                console.log('Conexión a Base de Datos exitosa (Singleton)');
            })
            .catch(err => {
                console.error('Error de conexión a Base de Datos', err);
            });
    }
}

module.exports = new Database();