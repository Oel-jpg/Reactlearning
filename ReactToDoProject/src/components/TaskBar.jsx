import {useState, useEffect} from 'react'
import TaskCard from './TaskCard'
import TaskTag from './TaskTag'

const TaskBar = () => {
  const [tasks, settasks] = useState([]);
  const [tags, setTags] = useState([]);

  const handleTaskDelete = (deletedTaskId) => {
    settasks(tasks.filter(task => task.id !== deletedTaskId));
    setTasks(data.slice(0, 10));
     
  };
  const handleTagsDelete = (deletedTagId) => {
    setTags(tags.filter(tag => tag.id !== deletedTagId));
  };

  useEffect (() => {
    fetch('http://localhost:8000/Tasks')
      .then(response => response.json())
      .then(data =>{
        settasks(data.slice(0, 10)); 
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/Tags')
      .then(response => response.json())
      .then(data => {
        setTags(data);
      });
  }, []);

  return (
    <section className="bg-[#1e293b] h-auto w-full">
      <div className="flex flex-row px-10">
        <div className="w-[70%] flex flex-col items-center">
          <h1 className=" text-white text-4xl font-normal">Sample Tasks</h1>
          <h2 className="text-blue-400">ShowAll - click to change</h2>
        </div>
        <div className="w-[30%] flex justify-center">
          <h1 className="text-white text-4xl font-normal">Tags</h1>
        </div>
      </div>
      <div className="bg-[#0f172a] rounded-xl flex mx-10 my-5">
        <div className="w-[70%] px-10 py-5 m-5 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg gap-x-10 gap-y-5">
            {tasks.map(task => (
              <TaskCard
                key={task.id}
                {...task}
                onDelete={handleTaskDelete}
              />
            ))}
          </div>
        </div>  
        <div className='w-[30%] px-10 py-5 m-5 flex flex-col gap-5 h-fit'>
          {tags.map(tag => (
            <TaskTag
              key={tag.id}
              {...tag}
              onDelete={handleTagsDelete}
            />
          ))}
        </div>

      </div>
    </section>
  )
}


export default TaskBar