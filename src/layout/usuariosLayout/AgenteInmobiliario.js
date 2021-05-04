import React from "react";
import Layout from "../Layout";
import Notificaciones from "../../components/Notificaciones";
import ButtonCard from "../../components/ButtonCard";

const AgenteInmobiliario = () => {

  const usuario = 'agente-inmobiliario';

  return (
    <Layout items={["Inicio", "Clientes", "Agenda", "Propiedades"]} usuario={usuario}>
      <div className="siimple-grid siimple--ml-3">
        <div className="siimple-grid-row">
          <div className="siimple-grid-col siimple-grid-col--6">
            <Notificaciones />
          </div>
          <div className="siimple-grid-col siimple-grid-col--6">
            <div className="siimple-grid-row siimple--display-flex" style={{justifyContent:"space-evenly"}}>
              <ButtonCard usuario={usuario} seccion={'Agenda'}/>
              <ButtonCard usuario={usuario} seccion={'Propiedades'}/>
            </div>
            <div className="siimple-grid-row siimple--display-flex"  style={{justifyContent:"center"}}>
              <ButtonCard usuario={usuario} seccion={'Clientes'}/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AgenteInmobiliario;
