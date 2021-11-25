function validateId(id: string): string | Error {
  if (id.length === 11) {
  // busca por cpf
    return 'cpf';
  } if (id.length === 9) {
  // busca por matricula
    return 'matricula';
  }
  throw new Error('Invalid Key');
}

export { validateId };
