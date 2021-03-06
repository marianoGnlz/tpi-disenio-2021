import React from "react";
import { InputGroup, Jumbotron, FormControl } from "react-bootstrap";
import imagenes from "../../../../static/imagenes.js";

const { Lupa } = imagenes;

const Buscador = () => {
  return (
    <Jumbotron style={{background: "rgba(255,255,255,.7)", borderRadius:'40px'}}>
      <h1 style={{ color:'#2B3330', marginBottom:'28px'}}>Encuentra la propiedad perfecta en Domus</h1>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <img src={Lupa} alt="buscador" className="icon" />
        </InputGroup.Prepend>
        <FormControl
          style={{borderRadius:'10px'}}
          placeholder="Ingrese propiedad"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <p></p>
    </Jumbotron>
  );
};

export default Buscador;
