import Tasks from "./Tasks";

const Page = async () => {
  const data = await fetch('http://localhost:3000/tasks')
  const tasks = await data.json().then(data => data.tasks);

  return <Tasks tasks={tasks} />;
}

export default Page;