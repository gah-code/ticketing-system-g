import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const { data, error } = await supabase.from('tickets').select('*');
        if (error) throw error; // handle API error
        if (data) {
          setTickets(data);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching tickets:', err);
      }
    };

    fetchTickets();
  }, []);

  if (error) {
    return <p>Error loading tickets: {error}</p>;
  }

  if (!tickets.length) {
    return <p>No tickets available.</p>; // Handle empty state
  }

  return (
    <ul className='ticket-list'>
      {tickets.map((ticket) => (
        <li key={ticket.id} className='ticket'>
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TicketList;
