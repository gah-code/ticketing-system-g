// src/App.jsx
import CreateTicket from '../public/components/CreateTicket.jsx';
import TicketList from '../public/components/TicketList.jsx';
import { TicketsProvider } from './contexts/TicketsContext.jsx'; // Import the provider
import './App.css';

const App = () => {
  return (
    <TicketsProvider>
      <div className='App'>
        <h1>Ticketing System</h1>
        <CreateTicket />
        <TicketList />
      </div>
    </TicketsProvider>
  );
};

export default App;
