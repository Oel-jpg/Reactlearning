import { useState } from 'react';
const Forum = ({setShowForum}) => {
  const [isHovered, setIsHovered] = useState(false);
  const background = isHovered ? 'bg-gray-200' : "bg-white";

  const handlesubmit = async (e) => { // Make the outer function async

    e.preventDefault();
    const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

        try {
          const response = await fetch('http://localhost:8000/Tasks', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
   
          }
          catch (error) {
            console.error('Error:', error);
          }
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black opacity-75" />
      <section className="fixed z-50 inset-0 flex items-center justify-center">
        <div className="flex justify-between bg-white p-8 rounded-lg w-full max-w-100 md:max-w-2xl shadow-xl">
          <form onSubmit={handlesubmit} className="flex flex-col">
            <div className="mb-4 flex flex-col"> 
              <label className="text-3xl font-semibold">Task Name*</label>
              <input className="text-lg"name="title" type="text" placeholder="e.g. Finish React Website" required />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-2xl font-normal">Description*</label>
              <input className="text-lg" name="description" placeholder="e.g. Make the homepage" />
            </div>
            <div className="flex flex-col text-lg mb-2">
              <label>Date Started*</label>
              <input className="flex justify-start text-xl" name="dateStarted" type="date" />
            </div>
            <div className="flex flex-col text-lg mb-2">
              <label>Due Date</label>
              <input className="flex justify-start text-xl"name="dueDate" type="date" />
            </div>
            <div>
              <label className="text-2xl">Tags</label>
            </div>
            <button className="flex justify-start text-2xl mt-4"type="submit">Submit</button>
          </form>
          <button type="button" className="flex justify-start" onClick={() => setShowForum(false)}>
            Close
          </button>
        </div>
      </section>
    </>
  );
};

export default Forum;