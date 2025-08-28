import Tasks from "./Tasks";
import Task from "@/types/Task.type";
const SERVER_HOST = process.env.NEXT_PUBLIC_SERVER_HOST;

const Page = async () => {
  const data = await fetch(`${SERVER_HOST}/tasks`)
  const tasks = await data.json().then(data => data.tasks);

  const completed = tasks.filter((task: Task) => task.completed)
  console.log("I rendered")

  return (
    <div className="flex flex-col bg-white w-screen h-screen text-black items-center p-10">
      <div className="flex flex-row w-full max-w-1/2 justify-between pb-2">
        <p>Tasks: {tasks.length}</p>
        <p>Completed: {completed.length} of {tasks.length}</p>
      </div>
      <Tasks tasks={tasks} />
    </div>
  )
}

export default Page;