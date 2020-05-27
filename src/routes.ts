import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
  const user = createUser({email: 'teste@teste.com.br', password: '123456'});
  
  return res.json({message: 'hello world'});
}