const { Router } = require('express');
const Gem = require('../models/CrystalGem');
module.exports = Router()

    .get('/:id', async (req, res) => {
        const id = req.params.id;
        const matchingGem = await Gem.getById(id);
        res.json(matchingGem);
    })

    .get('/', async (req, res) => {
        const gemData = await Gem.getAll();
        const gems = gemData.map((gem) => { return { id: gem.id, name: gem.name }; });
        res.json(gems);
    });