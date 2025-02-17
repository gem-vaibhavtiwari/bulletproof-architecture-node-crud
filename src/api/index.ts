import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import agendash from './routes/agendash';
import todo from './routes/todo';

export default () => {
  const app = Router();
  auth(app);
  user(app);
  agendash(app);
  todo(app);

  return app;
};
