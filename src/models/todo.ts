import mongoose, { Schema, Document } from 'mongoose';
import { ITodo } from '@/interfaces/ITodo';

const TodoSchema = new Schema<ITodo & Document>({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ITodo & Document>('Todo', TodoSchema);

