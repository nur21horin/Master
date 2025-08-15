import React from 'react'
import { useLoaderData } from 'react-router';

const Vocabulary = () => {

    const handleAddWord=event=>{
        event.preventDefault();
        const form=event.target;
        const word=form.text.value;
        const meaning=form.bengalitext.value;
        const user={word,meaning};
        console.log(user);
        form.reset();

        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('Successfully added your word');
                form.reset();
            }
        })
    };

   

  return (
    <div className='text-center flex-wrap flex flex-col items-center overflow-x-auto gap-y-4 justify-center h-auto w-full'>
    <h1>Welcome in Vocab Zone..</h1>
   
      <form className='items-center justify-center ' onSubmit={handleAddWord}>
        <input type='text' name='text' placeholder='Enter your word' id='' className='bg-amber-50 text-opacity-[1] mb-[20px] text-2xl w-[550px] text-black rounded-lg ' />
        <br/>
         <input type='text' name='bengalitext' placeholder='Meaning of the given word' id='' className='bg-amber-50 text-2xl w-[550px] text-black rounded-lg ' />
        <br/>
        <input type='submit' value="Enter" className='text-2xl font-serif bg-emerald-900 rounded-lg mt-4 w-[150px] h-auto '/>
      </form>
    </div>
  )
}

export default Vocabulary
