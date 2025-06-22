import {useState} from 'react';
import ConfirmTagsDelete from './ConfirmTagsDelete';
const TaskTag = ({name, color, id, onDelete}) => {
    console.log(name, color);   
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  return (
    <>

      <div className="w-xs h-10 rounded-xl bg-[black] 
        shadow-md shadow-blue-600 border-[2px] border-white p-3 flex flex-row items-center justify-between mb-2 cursor-pointer hover:scale-105 transition-all duration-200"
        style={{'--tag-color': `${color}`}}
        >     
            <div className="flex items-center justify-center">
              <h1 className="text-white text-center text-xs">{name}</h1>
              <div className={`w-3 h-3 bg-[var(--tag-color)] rounded-full ml-2 ${color}`}/>
              </div>              
            <button onClick={() => setShowConfirmDelete(true)} className="ml-2 text-white text-xs bg-red-600 rounded-full w-5 h-5 ">
                X
            </button>
      </div>

      {showConfirmDelete && (
        <ConfirmTagsDelete 
          setShowConfirmDelete={setShowConfirmDelete}
          id={id}
          onDelete={onDelete}
        />

      )}
    </>

  )
}

export default TaskTag