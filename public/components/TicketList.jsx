// src/TicketList.jsx
import { useTickets } from '../../src/contexts/TicketsContext';
import TicketItem from './TicketItem';
import styles from './TicketList.module.css';

const TicketList = () => {
  const { tickets } = useTickets(); // Get tickets from context

  if (!tickets.length) return <p>No tickets available.</p>;

  return (
    <ul className={styles.ticketList}>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </ul>
  );
};

export default TicketList;
