// src/routes/monsterRoutes.js
const express = require('express');
const router = express.Router();
const monsterController = require('../controllers/MonsterController');

router.post('/', monsterController.createMonster);
router.get('/', monsterController.getMonsters);
router.put('/:id', monsterController.updateMonster);
router.delete('/:id', monsterController.deleteMonster);

module.exports = router;