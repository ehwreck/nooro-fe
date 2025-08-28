type Task = {
  id?: number;
  title: string;
  description?: string;
  completed: boolean;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

export default Task;