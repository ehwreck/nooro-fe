'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
import type Task from "@/types/Task.type";
import EyeIcon from './EyeIcon';
import Link from 'next/link';
const SERVER_HOST = process.env.NEXT_PUBLIC_SERVER_HOST;

interface TaskProps {
  task: Task
}

const Task = (props: TaskProps) => {
  const didMount = useRef(false);
  const { task } = props;
  const router = useRouter();

  const [completed, setCompleted] = useState<boolean>(task.completed);

  useEffect(() => {
    if (didMount.current) {
      fetch(`${SERVER_HOST}/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({task:{...task, completed}})
      }).then(res => {
        if(!res.ok){
          return console.log("Unable to update status for task")
        }
        router.refresh();
        return res.json()
      })
    } else {
      didMount.current = true;
    }
  }, [completed])

  const clickHandler = (checked: boolean) => {
    setCompleted(checked);
  }

  const backgroundColor = () => {
    if(task.color === 'red') return 'bg-red-600';
    if(task.color === 'blue') return 'bg-blue-600';
    if(task.color === 'green') return 'bg-green-600';
    if(task.color === 'yellow') return 'bg-yellow-300';
    return 'bg-white';
  }

  return (
    <div className={`${backgroundColor()} flex flex-row justify-between items-center h-max p-4 gap-6 border border-solid border-black rounded-md`}>
      <div className='flex flex-row items-center gap-6'>
        <Link href={`/tasks/${task.id}`}>
          <EyeIcon />
        </Link>
        <div>
          <p className="text-2xl text-bold">{task.title}</p>
          <p className="text-sm">{task.description}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <input type="checkbox" checked={completed} id="completed" name="completed" onChange={(e) => clickHandler(e.target.checked)}/>
        <label htmlFor="completed">Completed</label>
      </div>
    </div>
  )
}

export default Task;