 const ConfirmTagsDelete = ({setShowConfirmDelete, id, onDelete}) => {
    const handleTagsDelete = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            const response = await fetch(`http://localhost:8000/Tags/${id}`, {
                method: 'DELETE',
            });
                if (response.ok) {
                onDelete(id); // Call the parent's delete handler
                setShowConfirmDelete(false);
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    
    
  return (
   <>
    <div className="fixed inset-0 z-40 bg-black opacity-75" onClick={() => setShowConfirmDelete(false)}/>
        <section className="fixed z-50 inset-0 flex items-center justify-center">
            <div className="flex flex-row gap-6 justify-center items-center bg-white p-8 rounded-lg w-full max-w-60 md:max-w-70 border-4 border-blue-600">
                <button onClick={handleTagsDelete}>Delete</button>
                <button onClick={() => setShowConfirmDelete(false)}>Cancel</button>
            </div>
        </section>
   </>
  )
}

export default ConfirmTagsDelete