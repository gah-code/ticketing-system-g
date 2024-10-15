// import React from 'react';
import CreateTicket from './CreateTicket';
import TicketList from './TicketList';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <div className='App'>
      <h1>Ticketing System</h1>
      <CreateTicket />
      <ErrorBoundary>
        <TicketList />
      </ErrorBoundary>
    </div>
  );
};

export default App;
