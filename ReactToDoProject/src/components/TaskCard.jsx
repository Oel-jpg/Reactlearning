import { useState } from 'react';
import ConfirmTaskCardDelete from './ConfirmTaskCardDelete';

const TaskCard = ({ title, description, dateStarted, dueDate, tags, id, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const background = isHovered ? 'bg-gray-300' : 'bg-white';
  const containerStyle = expanded ? 'text-3xl mb-2 text-center' : 'text-2xl text-center';
  
  const month = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };  

  const dayEnding = {
    "1": "st",
    "2": "nd",
    "3": "rd",
    "4": "th",
    "11": "th",
    "12": "th",
    "13": "th",
    "0": "th",
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No date set';
    
    const yearStr = dateString.slice(0, 4);
    const monthStr = month[dateString.slice(5, 7)] || 'Unknown';
    const dayStr = dateString.slice(8, 10);
    const suffix = dayEnding[dayStr] || dayEnding[dayStr.slice(-1)] || "th";
    return `${dayStr}${suffix} of ${monthStr}, ${yearStr}`;
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setShowConfirmDelete(true);
  };

  return (
    <div className="p-3 rounded-4xl bg-[#0f172a]">
      <div 
        className={`${background} ${
          expanded 
            ? 'rounded-xl p-4 border-2' 
            : 'rounded-4xl p-6 shadow-lg shadow-gray-500 border-6'
        } border-blue-600 cursor-pointer transition-all duration-200`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setExpanded(!expanded)}
      >
        <h1 className={`${containerStyle} font-bold`}>
          {title}
        </h1>
        
        {expanded && (
          <section className="flex flex-col space-y-2 mt-4">
            <h2 className="text-xl mb-2 font-normal">
              {description || 'No description provided'}
            </h2>
            
            <div className="flex text-sm space-x-4">
              <div className="font-medium">
                <h3>Starting date:</h3>
                <h3>Due Date:</h3>
              </div>
              <div>
                <p>{formatDate(dateStarted)}</p>
                <p>{formatDate(dueDate)}</p>
              </div>
            </div>
            
              <div className="flex flex-wrap gap-2 mt-2">
              </div>
            
            <button 
              onClick={handleDeleteClick}
              className="self-end mt-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Delete Task
            </button>
          </section>
        )}
        
        {showConfirmDelete && (
          <ConfirmTaskCardDelete  
            setShowConfirmDelete={setShowConfirmDelete} 
            id={id}
            onDelete={onDelete}
          />
        )}
      </div>
    </div>
  );
};

export default TaskCard;