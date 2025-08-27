import Task from "@/components/Task"
import type TaskType from "@/types/Task.type";

interface TasksProps {
  tasks: [TaskType];
}

const Tasks = (props: TasksProps) => {
  const { tasks = [] } = props;

  return (
    <div>
      {
        tasks.map((task: TaskType) => {
          return <Task task={task} />
        })
      }
    </div>
  )
}

export default Tasks;