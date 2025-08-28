import TaskItem from "@/components/TaskItem"
import type TaskType from "@/types/Task.type";

interface TasksProps {
  tasks: [TaskType];
}

const Tasks = (props: TasksProps) => {
  const { tasks = [] } = props;

  return (
    <div className="flex flex-col w-full max-w-1/2 gap-2">
      {
        tasks.map((task: TaskType) => {
          return <TaskItem key={task.id} task={task} />;
        })
      }
    </div>
  )
}

export default Tasks;