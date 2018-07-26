const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Heelo fucking world!!!');
});

router.post('/', (req, res) => {
    res.send('Game!!!');
});

module.exports = router;