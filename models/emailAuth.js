exports.verificaEmail = verificaEmail;

function verificaEmail(email) {
  const BancoDados = "email@teste.com.br"; //Meu Banco de Dados;
  if (email === BancoDados) {
    return "Email válido";
  } else {
    return "Email inválido";
  }
}
