import Joi from 'joi';

export const createTodoSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  description: Joi.string().max(1000).optional(),
  completed: Joi.boolean().optional(),
});

export const updateTodoSchema = Joi.object({
  title: Joi.string().min(3).max(255).optional(),
  description: Joi.string().max(1000).optional(),
  completed: Joi.boolean().optional(),
});
