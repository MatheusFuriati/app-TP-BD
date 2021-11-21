import { Request, Response } from 'express';
import { LoginCoordinatorService } from '../services/Coordinator/loginCoordinator.service';

type TLogin ={
  username: string,
  password: string
}
class CoordinatorController {
  async login(req: Request, res: Response) {
    const service = new LoginCoordinatorService();
    const login: TLogin = req.body;

    const isAuthenticated = await service.execute(login);
    res.json(isAuthenticated);
  }

  async update(req: Request, res: Response) {
    res.json('update');
  }

  async getSingle(req: Request, res: Response) {
    res.json('getSingle');
  }

  async getAll(req: Request, res: Response) {
    res.json('getAll');
  }
}

export { CoordinatorController };
