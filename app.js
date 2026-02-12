const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./src/config/db'); 

const monsterRoutes = require('./src/routes/MonsterRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/monsters', monsterRoutes);

app.listen(PORT, () => {
    console.log(`Servidor de Cazadores listo en http://localhost:${PORT}`);
});