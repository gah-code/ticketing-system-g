// src/TicketItem.jsx
import styles from './TicketItem.module.css';
import { useTickets } from '../../src/contexts/TicketsContext';

function TicketItem({ ticket }) {
  const { deleteTicket, currentTicket, setCurrentTicket } = useTickets(); // Access context functions
  const { id, title, description, created_at } = ticket;
  // const { id, title, description, category, status, priority, created_at } =

  const handleDeleteClick = (e) => {
    e.preventDefault();
    deleteTicket(id); // Call the delete function from the context
  };

  const handleTicketClick = (e) => {
    e.preventDefault();
    setCurrentTicket(ticket); // Set this ticket as the current active ticket
  };

  return (
    <li
      className={`${styles.ticketItem} ${
        id === currentTicket?.id ? styles['ticketItem--active'] : ''
      }`}
      onClick={handleTicketClick} // Set ticket as active when clicked
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {/* Uncomment these if you want to display the category, status, and priority */}
      {/* {category && <span className={styles.category}>{category}</span>} */}
      {/* {status && <span className={styles.status}>{status}</span>} */}
      {/* {priority && <span className={styles.priority}>{priority}</span>} */}

      <time className={styles.date}>
        {new Date(created_at).toLocaleDateString()}
      </time>
      <button className={styles.deleteBtn} onClick={handleDeleteClick}>
        &times;
      </button>
    </li>
  );
}

export default TicketItem;
