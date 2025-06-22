import { useState } from 'react';
import Forum from './Forum';
import TagsForum from './TagsForum';
const Hero = () => {
    const [showForum, setShowForum] = useState(false);
    const [buttonHovered, setButtonHovered] = useState(null);
    const [showTagsForum, setShowTagsForum] = useState(false);

    const buttonFormat = "block text-xs md:text-lg rounded-lg px-2 border-blue-800 border-[2px] shadow-md shadow-black transition-all duration-300 ease-in-out"
  return (
    <>
        <section className="bg-[#1e293b] p-6 py-20">
            <div className="mx-auto px-3 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
                <div className="text-center mb-2">
                    <h1 className="text-white text-5xl md:text-8xl font-bold">
                        ToDoers
                    </h1>
                    <p className="text-gray-300 font-semibold  text-[10px] md:text-xl">
                        Make organizing your tasks simpler.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-xs md:text-lg">
                    <button className={`${buttonFormat} ${buttonHovered === 'primary' ? ' text-blue-400' : 'bg-[#0f172a] text-white'}`} onClick={() => setShowForum(true)} onMouseEnter={() => setButtonHovered("primary")} onMouseLeave={() => setButtonHovered(null)}>
                        Add New Task
                    </button>
                    <button className={`${buttonFormat} ${buttonHovered === 'secondary' ? 'text-blue-400' : 'bg-gray-100 text-[#0f172a]'}`} onClick={() => setShowTagsForum(true)} onMouseEnter={() => setButtonHovered("secondary")} onMouseLeave={() => setButtonHovered(null)}>
                        Add New Tags
                    </button>

                    {showForum && (
                    <Forum setShowForum={setShowForum}/>
                    )}
                    {showTagsForum && (
                    <TagsForum setShowTagsForum={setShowTagsForum}/>
                    )}
                </div>
            </div>
            
        </section>    
    </>
  )
}

export default Hero