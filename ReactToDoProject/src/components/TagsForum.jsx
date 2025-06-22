const TagsForum = ({setShowTagsForum}) => {
  const handlesubmit = async (e) => { // Make the outer function async
    e.preventDefault();
    const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      const color = data.color.substring(1);

        try {
          const response = await fetch('http://localhost:8000/Tags', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data, {color}),
          });

          if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
          } else {
            console.error('Error:', response.statusText);
          }
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
                        <label className="text-2xl font-semibold">
                            Tag Name
                        </label>
                        <input className="text-lg" name="name" type="text" placeholder="e.g. Work" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-xl font-normal">Color</label>
                        <input className="text-lg" name="color" type="color"/>
                    </div>
                    <button className="flex justify-start text-2xl mt-4"type="submit">Submit</button>
                </form>
                
                <button type="button" className="flex justify-start" onClick={() => setShowTagsForum(false)}>
                    Close
                </button>
            </div>
        </section>
        </>
  )
}

export default TagsForum
