const emailAuth = require("../models/emailAuth.js");

test("Email é váldio?", () => {
  const resultado = emailAuth.verificaEmail("email@teste.com.br");
  expect(resultado).toBe("Email válido");
});
