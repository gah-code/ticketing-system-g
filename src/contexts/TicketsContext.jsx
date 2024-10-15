// src/contexts/TicketsContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const TicketsContext = createContext();

export function TicketsProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  const [currentTicket, setCurrentTicket] = useState(null);

  // Fetch tickets from Supabase when the context is initialized
  useEffect(() => {
    const fetchTickets = async () => {
      const { data } = await supabase.from('tickets').select('*');
      setTickets(data || []);
    };
    fetchTickets();
  }, []);

  const deleteTicket = async (id) => {
    try {
      // Delete the ticket from Supabase
      const { error } = await supabase.from('tickets').delete().eq('id', id);
      if (error) throw error;

      // Remove the ticket from the state
      setTickets((prevTickets) =>
        prevTickets.filter((ticket) => ticket.id !== id)
      );
    } catch (error) {
      console.error('Error deleting ticket:', error.message);
    }
  };

  return (
    <TicketsContext.Provider
      value={{ tickets, currentTicket, setCurrentTicket, deleteTicket }}
    >
      {children}
    </TicketsContext.Provider>
  );
}

export const useTickets = () => {
  return useContext(TicketsContext);
};
