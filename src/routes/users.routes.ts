import { Router, Request, Response, NextFunction } from 'express';
//forma de configurar rotas no express

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Fabricio' }];
  res.status(200).send({ users });
});

usersRoute.get(
  '/users/:uuid',
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(200);
  }
);

export default usersRoute;
