test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(10);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error);
    }
  }, 500);
});

//=======================================================================================

// Agora sim, nosso teste falhou! Isso significa que você conseguiu testar com sucesso a callback.
// Vamos a mais um exemplo para fixação, desta vez você irá implementar uma função que espera um tempo e retorna a soma de dois números:

const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});