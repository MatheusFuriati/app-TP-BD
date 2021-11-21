import { Request, Response } from 'express';
import { LoginStudentsService } from '../services/Students/loginStudents.service';

type TLogin ={
  username: string,
  password: string
}
class StudentsController {
  async login(req: Request, res: Response) {
    const service = new LoginStudentsService();
    const login: TLogin = req.body;

    const isAuthenticated = await service.execute(login);
    res.json(isAuthenticated);
  }

  async update(req: Request, res: Response) {
    // implementar services

    res.json('update Students');
  }

  async getSingle(req: Request, res: Response) {
    // implementar services

    res.json('getSingle Students');
  }

  async getAll(req: Request, res: Response) {
    // implementar services

    res.json('getAll Students');
  }
}

export { StudentsController };
