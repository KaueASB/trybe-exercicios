const service = require('./service')

//EXERCICIO 1
it("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

//EXERCICIO 2
it("criar nova implementação com o Mock recebendo dois parametros e retornar o resultado da divisão do primeiro pelo segundo", () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => (a / b));


  expect(service.randomNumber(4, 4)).toBe(1);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(4, 4)
});

//EXERCICIO 3
it("criar nova implementação com o Mock recebendo dois parametros", () => {
  service.randomNumber = jest.fn().mockImplementation((a, b, c) => (a * b * c));

  expect(service.randomNumber(4, 4, 4)).toBe(64);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(4, 4, 4)

  service.randomNumber.mockReset();
  expect(service.randomNumber).toHaveBeenCalledTimes(0);

  service.randomNumber = jest.fn().mockImplementation((a) => (a * 2));

  expect(service.randomNumber(4)).toBe(8);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(4)
});
