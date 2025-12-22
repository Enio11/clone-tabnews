exports.somar = somar;

function somar(argumento1, argumento2) {
  if (typeof argumento1 !== "number" || typeof argumento2 !== "number") {
    return "Erro";
  }

  return argumento1 + argumento2;
}
