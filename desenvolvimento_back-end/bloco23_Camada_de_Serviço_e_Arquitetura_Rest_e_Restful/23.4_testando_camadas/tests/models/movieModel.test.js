const sinon = require('sinon');
const { expect } = require('chai');

const db = require('../../src/models/db');
const movieModel = require('../../src/models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const result = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(db, 'query').resolves(result);
  });

  // Restauraremos a função `query` original após os testes.
  after(async () => {
    db.query.restore();
  });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await movieModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await movieModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});