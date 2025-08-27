'use client'
import { useState } from "react";
import type Task from "@/types/Task.type";

interface TaskProps {
  task: Task
}

const Task = (props: TaskProps) => {
  const { task } = props;

  const [completed, setCompleted] = useState<boolean>(task.completed);

  return (
    <div>
      <input type="checkbox" checked={completed} name="completed"/>
      <div>
        <p>{task.title}</p>
        <p>{task.description}</p>
      </div>
    </div>
  )
}

export default Task;