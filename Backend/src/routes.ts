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
routes.get('/students/student', ensureAuthenticated, new StudentsController().getAll);
routes.get('/students/student/:id', ensureAuthenticated, new StudentsController().getSingle);

routes.post('/coordinators/coordinator/login', new CoordinatorController().login);
routes.patch('/coordinators/coordinator/update', ensureAuthenticated, new CoordinatorController().update);
routes.get('/coordinators/coordinator', ensureAuthenticated, new CoordinatorController().getAll);
routes.get('/coordinators/coordinator/:id', ensureAuthenticated, new CoordinatorController().getSingle);

export { routes };
