import React, { useState, useContext } from "react";
import "../styles/calculadora.css";
import PresupuestoContext from "../context/presupuestoContext";

const Calculadora = () => {
  const [presupuesto, setPresupuesto] = useState({
    nombre: "",
    nit: null,
    direccion: "",
    tomas: null,
    luces: null,
    interruptores: null,
    tipo: "3",
    puTomas: null,
    puInterruptores: null,
    puLuces: null,
  });

  const presupuestoContext = useContext(PresupuestoContext);
  const { addPresupuesto, ticket } = presupuestoContext;

  const handleChange = (e) => {
    setPresupuesto({
      ...presupuesto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPresupuesto(presupuesto);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Ingresa algunos datos</h2>

        <label for="nombre">Nombre de la empresa</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={presupuesto.nombre}
          onChange={handleChange}
        />

        <label for="nit">Nit de la empresa</label>
        <input
          type="number"
          name="nit"
          placeholder="Nit"
          value={presupuesto.nit}
          onChange={handleChange}
        />

        <label for="direcion"> Direccion</label>
        <input
          type="text"
          name="direccion"
          placeholder="Direccion"
          value={presupuesto.direccion}
          onChange={handleChange}
        />

        <label for="tipo">Elige un tipo de vivienda</label>
        <select name="tipo" value={presupuesto.tipo} onChange={handleChange}>
          <option value="3">Estrato 3</option>
          <option value="4">Estrato 4</option>
          <option value="social">Interes social</option>
        </select>

        <label for="tomas">Tomas</label>
        <input
          type="number"
          name="tomas"
          placeholder="Numero de Tomas"
          value={presupuesto.tomas}
          onChange={handleChange}
        />

        <label for="luces">Luces</label>
        <input
          type="number"
          name="luces"
          placeholder="Numero de luces"
          value={presupuesto.luces}
          onChange={handleChange}
        />

        <label for="interruptores">Interruptores</label>
        <input
          type="number"
          name="interruptores"
          placeholder="Numero de interruptores "
          value={presupuesto.interruptores}
          onChange={handleChange}
        />

        <label for="puTomas">Precio unitario de tomas</label>
        <input
          type="number"
          name="puTomas"
          placeholder="Precio unitario"
          value={presupuesto.puTomas}
          onChange={handleChange}
        />

        <label for="puLuces">Precio unitario de luces</label>
        <input
          type="number"
          name="puLuces"
          placeholder="Precio unitario"
          value={presupuesto.puLuces}
          onChange={handleChange}
        />

        <label for="puInterruptores">Precio unitario de interruptores</label>
        <input
          type="number"
          name="puInterruptores"
          placeholder="Precio unitario"
          value={presupuesto.puInterruptores}
          onChange={handleChange}
        />

        <input className="btn" type="submit" value="Calcular Precio" />
      </form>

      <div className="recibo-container">
        <div className="recibo-header">
          <h2>Presupuesto</h2>
        </div>
        <div className="recibo-content">
          <h4>Nombre: {ticket.nombreEmpresa}</h4>
          <h4>Nit: {ticket.nit}</h4>
          <hr />
          <h4>Tomas: {ticket.tomaCant}</h4>
          <h4>Luces: {ticket.cantidadLuces}</h4>
          <h4>Interruptores: {ticket.cantidadInterruptores}</h4>
          <div className="total">
            <p>Total:</p>
            <h3>${ticket.total}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
