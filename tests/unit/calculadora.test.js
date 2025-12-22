const calculadora = require("../../models/calculadora.js");

test("somar 2+2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Se o valor do argumento for diferente de um numero dê erro.", () => {
  const resultado = calculadora.somar("Banana", "Pão");
  expect(resultado).toBe("Erro");
});
