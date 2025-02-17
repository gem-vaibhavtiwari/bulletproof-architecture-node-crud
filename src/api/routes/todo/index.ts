import { Router } from 'express';
import { celebrate } from 'celebrate';
import { createTodoSchema, updateTodoSchema } from './todo.validation';
import middlewares from '@/api/middlewares';
import todoController from './todo.controller';

const route = Router();

export default (app: Router) => {
  app.use('/todos', middlewares.isAuth, middlewares.attachCurrentUser, route);

  route.post(
    '/',
    celebrate({
      body: createTodoSchema,
    }),
    (req, res, next) => todoController.create(req, res, next),
  );

  route.get('/', (req, res, next) => todoController.getAll(req, res, next));

  route.get('/:id', (req, res, next) => todoController.getById(req, res, next));

  route.put(
    '/:id',
    celebrate({
      body: updateTodoSchema,
    }),
    (req, res, next) => todoController.update(req, res, next),
  );

  route.delete('/:id', (req, res, next) => todoController.delete(req, res, next));
};
