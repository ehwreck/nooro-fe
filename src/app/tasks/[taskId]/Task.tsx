import TaskType from "@/types/Task.type";
import Link from "next/link";

interface TaskProps {
  task: TaskType;
}

const Task = ({ task }: TaskProps) => {
  return (
    <div className="flex flex-col bg-white w-screen h-screen text-black items-center p-10">
      <div className="w-full max-w-1/2 justify-start mb-2">
        <Link href="/tasks" className="text-blue-600 underline">All Tasks</Link>
      </div>
      <div className="flex flex-row w-full max-w-1/2 justify-between pb-2">
        <h1 className="text-3xl">{task.title}</h1>
        <Link href={`/tasks/${task.id}/edit`} className="bg-blue-600 rounded-md px-6 py-2">
          Edit
        </Link>
      </div>
      <p>{task.description}</p>
      <p>{task.completed}</p>
      <p>Created on: {String(task.createdAt)}</p>
      <p>Updated on: {String(task.updatedAt)}</p>
      <p>Color: {task.color}</p>
    </div>
  )
}

export default Task;