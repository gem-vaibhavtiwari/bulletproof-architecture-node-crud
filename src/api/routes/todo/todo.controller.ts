import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import TodoService from '@/services/todo';

export default {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoService = Container.get(TodoService);
      const todo = await todoService.createTodo(req.currentUser._id, req.body);
      res.status(201).json(todo);
    } catch (err) {
      next(err);
    }
  },

  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoService = Container.get(TodoService);
      const todos = await todoService.getAllTodos(req.currentUser._id);
      res.json(todos);
    } catch (err) {
      next(err);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoService = Container.get(TodoService);
      const todo = await todoService.getTodoById(req.currentUser._id, req.params.id);
      if (!todo) return res.status(404).json({ message: 'Todo not found' });
      res.json(todo);
    } catch (err) {
      next(err);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoService = Container.get(TodoService);
      const updatedTodo = await todoService.updateTodo(req.currentUser._id, req.params.id, req.body);
      if (!updatedTodo) return res.status(404).json({ message: 'Todo not found' });
      res.json(updatedTodo);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoService = Container.get(TodoService);
      const deletedTodo = await todoService.deleteTodo(req.currentUser._id, req.params.id);
      if (!deletedTodo) return res.status(404).json({ message: 'Todo not found' });
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};
