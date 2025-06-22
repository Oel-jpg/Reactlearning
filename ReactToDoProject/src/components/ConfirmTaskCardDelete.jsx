 const ConfirmTaskCardDelete = ({setshowConfirmDelete, id, onDelete}) => {
    const handleTasksDelete = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            const response = await fetch(`http://localhost:8000/Tasks/${id}`, {
                method: 'DELETE',
            });
                if (response.ok) {
                onDelete(id); // Call the parent's delete handler
                setshowConfirmDelete(false);
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    
    
  return (
   <>
    <div className="fixed inset-0 z-40 bg-black opacity-75" onClick={() => setshowConfirmDelete(false)}/>
        <section className="fixed z-50 inset-0 flex items-center justify-center">
            <div className="flex flex-row gap-6 justify-center items-center bg-white p-8 rounded-lg w-full max-w-60 md:max-w-70 border-4 border-blue-600">
                <button onClick={handleTasksDelete}>Delete</button>
                <button onClick={() => setshowConfirmDelete(false)}>Cancel</button>
            </div>
        </section>
   </>
  )
}

export default ConfirmTaskCardDelete