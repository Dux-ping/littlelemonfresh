import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
};

export default App;
