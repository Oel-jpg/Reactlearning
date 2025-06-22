import logo from '../assets/image/logo.png'


const Navbar = () => {
  return (
    <>

              
      <nav className="bg-[#0f172a] border-b-white border-b" >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-20 items-center md:justify-between justify-center">
      
        <div className="flex items-center space-x-2">
          <img src={logo} alt="ToDoLogo" className="h-20 w-auto" />
          <span className="hidden md:block text-white text-3xl font-bold">
            ToDo
          </span>
        
        </div>

    
        <div className=" text-gray-200 flex items-center space-x-2 md:space-x-5 ">
          <h1>Calendar</h1>
          <h1>Tasks</h1>
          <h1>Placeholder</h1>
        </div>

    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar 

