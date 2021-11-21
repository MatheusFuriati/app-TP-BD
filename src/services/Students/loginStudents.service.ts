import jwt from 'jsonwebtoken';

type TLogin ={
  username: string,
  password: string
}

class LoginStudentsService {
  async execute({ password, username }: TLogin) {
    try {
      // buscar senha no banco de dados para comparar com {password}
      const token = jwt.sign(password, process.env.SECRET_KEY); // criptografa a senha

      // descriptografa e compara com a enviada pelo usuário
      const authenticated = jwt.verify(token, process.env.SECRET_KEY) === password;

      return authenticated;
    } catch (err: any) {
      console.log(err);

      return { err };
    }
  }
}

export { LoginStudentsService };
