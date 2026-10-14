import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from "./pages/dashboard/Dashboard";
import NewTicket from "./pages/newTicket/NewTicket";
import TicketDetails from "./pages/ticketDetails/TicketDetails";

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/newTicket" element={<NewTicket />} />
            <Route path="/ticketDetails" element={<TicketDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
