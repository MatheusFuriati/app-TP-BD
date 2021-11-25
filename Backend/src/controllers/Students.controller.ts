import { Request, Response } from 'express';
import { DataServiceStudents } from '../services/Students/dataStudents.service';
import { LoginStudentsService } from '../services/Students/loginStudents.service';

type TLogin ={
  username: string,
  password: string
}
class StudentsController {
  async login(req: Request, res: Response) {
    const service = new LoginStudentsService();
    const login: TLogin = req.body;
    console.log(login);

    const result = await service.execute(login);

    if (result.errorCode) {
      res.status(401).json(result);
    }
    res.json(result);
  }

  async update(req: Request, res: Response) {
    // implementar services

    res.json('update Students');
  }

  async getSingle(req: Request, res: Response) {
    // implementar services
    const { id } = req.params;
    const service = new DataServiceStudents();
    const result = await service.getData(id);
    if (result instanceof Error) {
      const { message } = result;
      res.json({ TypeError: message });
    }
    res.json([{ params: id }, result]);
  }

  async getAll(req: Request, res: Response) {
    // implementar services

    res.json('getAll Students');
  }
}

export { StudentsController };
