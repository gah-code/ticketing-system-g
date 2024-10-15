import { useState } from 'react';
import { supabase } from './supabaseClient';

const CreateTicket = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createTicket = async () => {
    const { data, error } = await supabase
      .from('tickets')
      .insert([{ title, description }]);

    if (error) console.error(error);
  };

  return (
    <div className='create-ticket'>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Description'
      />
      <button onClick={createTicket}>Create Ticket</button>
    </div>
  );
};

export default CreateTicket;
