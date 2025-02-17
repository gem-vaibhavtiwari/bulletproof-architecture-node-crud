import { Service, Inject } from 'typedi';
import { ITodo } from '@/interfaces/ITodo';

@Service()
export default class TodoService {
  constructor(@Inject('todoModel') private todoModel: Models.TodoModel) {}
  public async createTodo(userId: string, data: Partial<ITodo>) {
    return this.todoModel.create({ ...data, user: userId });
  }

  public async getAllTodos(userId: string) {
    return this.todoModel.find({ user: userId });
  }

  public async getTodoById(userId: string, id: string) {
    return this.todoModel.findOne({ _id: id, user: userId });
  }

  public async updateTodo(userId: string, id: string, data: Partial<ITodo>) {
    return this.todoModel.findOneAndUpdate({ _id: id, user: userId }, data, { new: true });
  }

  public async deleteTodo(userId: string, id: string) {
    return this.todoModel.findOneAndDelete({ _id: id, user: userId });
  }
}
