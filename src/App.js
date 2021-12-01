import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PresupuestoState from "./context/PresupuestoState";
import Home from "./components/Home";
import Calculadora from "./components/Calculadora";
import Resultado from "./components/Resultado";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <PresupuestoState>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/resultado" element={<Resultado />} />
        </Routes>
        <Footer />
      </Router>
    </PresupuestoState>
  );
}

export default App;
