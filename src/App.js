import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Manage from "./components/Manage";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Message from "./components/Message";
import Notification from "./components/Notification";
import Broadcast from "./components/Broadcast";
import NotiDetail from "./components/NotiDetail";
import Footer from "./components/Footer";
import { Modal } from "@mui/material";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/manage" element={<Manage />}></Route>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/message" element={<Message />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/broadcast" element={<Broadcast />} />
          <Route path="/notidetail" element={<NotiDetail />} />
          <Route path="/notidetail" element={<Modal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
