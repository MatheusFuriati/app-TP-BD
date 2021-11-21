import { Router } from 'express';
import { CoordinatorController } from './controllers/Coordinator.controller';
import { StudentsController } from './controllers/Students.controller';

const routes = Router();
function ensureAuthenticated(req, res, next) {
  next();
}

routes.get('/', (_, response) => response.send('Hello world'));

routes.post('/students/login', new StudentsController().login);
routes.patch('/students/update', ensureAuthenticated, new StudentsController().update);
routes.get('/students/getAll', ensureAuthenticated, new StudentsController().getAll);
routes.get('/students/getSingle', ensureAuthenticated, new StudentsController().getSingle);

routes.post('/coordinator/login', new CoordinatorController().login);
routes.patch('/coordinator/update', ensureAuthenticated, new CoordinatorController().update);
routes.get('/coordinator/getAll', ensureAuthenticated, new CoordinatorController().getAll);
routes.get('/coordinator/getSingle', ensureAuthenticated, new CoordinatorController().getSingle);

export { routes };
