const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');
const errorMiddleware = require('./errorMiddleware');

const app = express();

// USANDO TRY/CATCH
// app.get('/:fileName', async (req, res, next) => {
// 	try {
// 		const file = await fs.readFile(`./${req.params.fileName}`);
// 		res.send(file.toString('utf-8'));
// 	} catch (e) {
// 		next(e);
// 	}
// });

// USANDO O EXPRESS-RESCUE
// app.get('/:fileName', rescue(async (req, res) => {
//     const file = await fs.readFile(`./${req.params.fileName}`);
//     res.send(file.toString('utf-8'));
//   })
// );

// USANDO O EXPRESS-RESCUE COM MIDDLEWARE DE ERRO

app.get('/:fileName', [rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  }),
	// ESTE É O TRECHO QUE ESTAVA NO FINAL DO CÓDIGO
  (err, req, res, next) => {
    if (err.code === 'ENOENT') {
			console.log(err);
      const newError = new Error(err.message);
      newError.code = 'file_not_found';
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  },
]);

// ESTE TRECHO NO FINAL DO CÓDIGO É O MIDDLEWARE DE ERRO
// app.use(function (err, req, res, next) {
//   res.status(500).json({ error: `Erro: ${err.message}` });
// });

app.use(errorMiddleware);
app.listen(3002);
