const { Router } = require('express');

const movieRoute = Router();

movieRoute.get('/:id', (req, res) => { res.status(200).json({ id: req.params.id }); });

movieRoute.delete('/:id', (_req, _res) => { });

movieRoute.put('/:id', (_req, _res) => { });

movieRoute.post('/', (_req, _res) => { });

movieRoute.get('/', (_req, res) => { res.send('to aqui'); });

module.exports = movieRoute;