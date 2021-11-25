import jwt from 'jsonwebtoken';

type TLogin ={
  username: string,
  password: string
}

class LoginStudentsService {
  async execute({ password, username }: TLogin) {
    console.log(password);

    try {
      // buscar senha no banco de dados para comparar com {password}
      const user = {
        name: '', cpf: '', matricula: '', password,
      };
      const token = jwt.sign(password, process.env.SECRET_KEY); // criptografa a senha

      // descriptografa e compara com a enviada pelo usuário
      const authenticated = jwt.verify(token, process.env.SECRET_KEY) === password;
      if (authenticated) {
        return { user };
      }
      throw new Error('Usuario ou senha Invalida');
    } catch (err) {
      return { errorCode: 'invalidkey', message: err.message };
    }
  }
}

export { LoginStudentsService };
