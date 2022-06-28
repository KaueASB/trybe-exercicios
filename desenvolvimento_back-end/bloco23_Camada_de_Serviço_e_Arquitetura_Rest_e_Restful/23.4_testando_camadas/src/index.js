const express = require('express');
const movieRoute = require('./routes/movieRoute');

const app = express();

app.use('/movie', movieRoute);

// app.use((err, _req, res, _next) => {
//   switch (err.name) {
//     case 'ValidationError':
//       res.status(400).json({ message: err.message });
//       break;
//     case 'NotFoundError':
//       res.status(404).json({ message: err.message });
//       break;
//     default:
//       res.status(500).json({ message: err.message });
//   }
// });

app.listen(3000, () => console.log('rodando na porta 3000'));
