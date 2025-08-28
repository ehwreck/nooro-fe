import Task from './Task'
const SERVER_HOST = process.env.NEXT_PUBLIC_SERVER_HOST;

interface PageParams {
  taskId: string;
}

const Page = async ({ params }: { params: PageParams }) => {
  const { taskId } = await params;

  const data = await fetch(`${SERVER_HOST}/tasks/${taskId}`)
  const task = await data.json().then(data => data.task);

  return <Task task={task} />
}

export default Page;