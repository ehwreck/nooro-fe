'use client'

import Task from "@/types/Task.type";
import React, { useState } from "react";
import { redirect, RedirectType } from 'next/navigation'
import { useRouter } from 'next/navigation';
const SERVER_HOST = process.env.NEXT_PUBLIC_SERVER_HOST;

interface TaskFormProps {
  currentTask?: Task;
}

const TaskForm = (props: TaskFormProps) => {
  const { currentTask: task } = props;
  const router = useRouter();

  const [title, setTitle] = useState(task?.title ?? '');
  const [description, setDescription] = useState(task?.description ?? '');
  const [completed, setCompleted] = useState(task?.completed ?? false);
  const [color, setColor] = useState(task?.color ?? "white");


  const createTask = () => {
    fetch(`${SERVER_HOST}/tasks`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task: { title, description, completed, color }
      })
    }).then(res => {
      if(!res.ok){
        return console.log("Unable to create task")
      }
      router.refresh();
      return redirect(`/tasks`, RedirectType.push)
    })
  }

  const updateTask = () => {
    fetch(`${SERVER_HOST}/tasks/${task?.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task: { title, description, completed, color }
      })
    }).then(res => {
      if(!res.ok){
        return console.log("Unable to update task")
      }
      router.refresh();
      return redirect(`/tasks/${task?.id}`, RedirectType.push)
    })
  }

  const deleteTask = () => {
    fetch(`${SERVER_HOST}/tasks/${task?.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => {
    if(!res.ok){
      return console.log("Unable to delete task")
    }
    return redirect('/tasks', RedirectType.push)
  })
  }

  return (
    <div className="flex flex-col bg-white w-screen h-screen text-black items-center p-10 gap-4">
      <div className="flex flex-col w-full mx-auto max-w-1/2">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="rounded-md border border-solid p-2"/>
      </div>

      <div className="flex flex-col w-full mx-auto max-w-1/2">
        <label htmlFor="description">Description</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="rounded-md border border-solid p-2"/>
      </div>

      <div className="flex flex-col w-full mx-auto max-w-1/2">
        <label htmlFor="color">Color</label>
        <select name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} className="rounded-md border border-solid p-2">
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>

      <div className="flex flex-row w-full mx-auto max-w-1/2 gap-4">
        <label htmlFor="completed">Completed</label>
        <input type="checkbox" id="completed" checked={completed} onChange={(e) => setCompleted(e.target.checked)} className="rounded-md border border-solid p-2"/>
      </div>

      <div className="flex flex-row justify-between w-full mx-auto max-w-1/2 gap-4">
        <button className="px-4 py-2 bg-blue-600 rounded-md text-white cursor-pointer" onClick={task ? updateTask : createTask}>{task ? "Update" : "Create"}</button>
        <button className="px-4 py-2 bg-red-600 rounded-md text-white cursor-pointer" onClick={deleteTask}>Delete</button>
      </div>
    </div>
  )
}

export default TaskForm;