// src/controllers/monsterController.js
const Monster = require('../models/MonsterModel');

// CREAR Monstruo
exports.createMonster = async (req, res) => {
    try {
        const nuevoMonstruo = new Monster(req.body);
        await nuevoMonstruo.save();
        res.status(201).json(nuevoMonstruo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// LEER Monstruos
exports.getMonsters = async (req, res) => {
    try {
        const monstruos = await Monster.find();
        res.status(200).json(monstruos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ACTUALIZAR Monstruo
exports.updateMonster = async (req, res) => {
    try {
        const { id } = req.params;
        const monstruoActualizado = await Monster.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(monstruoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// ELIMINAR Monstruo
exports.deleteMonster = async (req, res) => {
    try {
        const { id } = req.params;
        await Monster.findByIdAndDelete(id);
        res.status(200).json({ message: "Monstruo eliminado del registro" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};