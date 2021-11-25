import { Request, Response } from 'express';
import { LoginCoordinatorService } from '../services/Coordinator/loginCoordinator.service';

type TLogin ={
  username: string,
  password: string
}
class CoordinatorController {
  async login(req: Request, res: Response) {
    const servicesLogin = new LoginCoordinatorService();
    const login: TLogin = req.body;

    const isAuthenticated = await servicesLogin.login(login);
    res.json(isAuthenticated);
  }

  async update(req: Request, res: Response) {
    res.json('update Coordinator');
  }

  async getSingle(req: Request, res: Response) {
    const { id } = req.params;

    res.json([{ params: id }, { return: 'getSingle Coordinator' }]);
  }

  async getAll(req: Request, res: Response) {
    res.json('getAll Coordinator');
  }
}

export { CoordinatorController };
