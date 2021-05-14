import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import "./FormCita.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from  "../../../../../../../src/static/images/caCITA.jpg"
import BackButton from "../../../../../../components/BackButton";
import useAuth from "../../../../../../hooks/useAuth";


// const user = useAuth(history)



const FormCita = (history) => {

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fecha: "",
    hora: "",
  });
  const [focus, setFocus] = useState({
    nombreFocus: false,
    apellidoFocus: false,
    emailFocus: false,
    telefonoFocus: false,
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else
      handleShow();
    setValidated(true);
    event.preventDefault();
    event.stopPropagation();

  };

  const { nombre, apellido, email, telefono, fecha, hora } = datos;
  const { nombreFocus, apellidoFocus, emailFocus, telefonoFocus } = focus;

  const handleFocus = (e) => {
    setFocus({
      ...focus,
      [e.target.name + "Focus"]: true,
    });
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocus({
        ...focus,
        [e.target.name + "Focus"]: false,
      });
    }
  };
  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  document.querySelector('body').style.background = `url(${img})`

  const user = useAuth(history)
  return (
    <>
      
      <Container style={{display:'flex', alignItems:'start', margin:'0px', marginTop:'15px', justifyContent:'flex-start'}}>
      <BackButton className='color:red, background:#50628C01' history={history} /></Container>
      <Container style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'20px', margin:'0px', marginRight:'370px'}}>
      
      <Card style={{ border: 'none', marginTop: '30px', border:'none', background:'#50628C01'}}>
        <Card.Header as="h1" style={{ textShadow: '1px 1px 10px black', background: '#50628C90', color: 'white', borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }}>Programar Cita</Card.Header>
        <Card.Body style={{ background: '#B3BCE880', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', border:'none',  }}>



          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Card.Title as='h5' style={{ color: 'white', fontWeight:'500' }}>Ingrese sus datos Personales</Card.Title>
            <Form.Group className="form-group-2" controlId="validationName">
              <Form.Label
                className="form-label-2"
                style={{
                  top: nombreFocus ? "0" : "12px",
                  fontSize: nombreFocus ? ".8rem" : "1rem",
                }}
              >

              </Form.Label>
              <Form.Control
                required
                className="form-control-2"
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleChange(e)}
                type="text"
                name='nombre'
                value={nombre}
                placeholder='Nombre'
                color='white'
              />
              <Form.Control.Feedback className="feedbackCustom" type="invalid">

              </Form.Control.Feedback>
              <Form.Control.Feedback className="feedbackCustom">

              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-group-2" controlId="validationSurName">
              <Form.Label
                className="form-label-2"
                style={{
                  top: apellidoFocus ? "0" : "12px",
                  fontSize: apellidoFocus ? ".8rem" : "1rem",
                }}
              >

              </Form.Label>
              <Form.Control
                required
                className="form-control-2"
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleChange(e)}
                type="text"
                name='apellido'
                value={apellido}
                placeholder='Apellido'
              />
              <Form.Control.Feedback className="feedbackCustom" type="invalid">

              </Form.Control.Feedback>
              <Form.Control.Feedback className="feedbackCustom">

              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-group-2" controlId="validationEmail">
              <Form.Label
                className="form-label-2"
                style={{
                  top: emailFocus ? "0" : "12px",
                  fontSize: emailFocus ? ".8rem" : "1rem",
                }}
              >

              </Form.Label>
              <Form.Control
                required
                className="form-control-2"
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleChange(e)}
                type="email"
                name='email'
                value={email}
                placeholder='Correo electrónico'
              />
              <Form.Control.Feedback className="feedbackCustom" type="invalid">

              </Form.Control.Feedback>
              <Form.Control.Feedback className="feedbackCustom">

              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-group-2" controlId="validationTel">
              <Form.Label
                className="form-label-2"
                style={{
                  top: telefonoFocus ? "0" : "12px",
                  fontSize: telefonoFocus ? ".8rem" : "1rem",
                }}
              >

              </Form.Label>
              <Form.Control
                required
                className="form-control-2"
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleChange(e)}
                type="tel"
                name='telefono'
                value={telefono}
                placeholder='Telefono'
              />
              <Form.Control.Feedback className="feedbackCustom" type="invalid">

              </Form.Control.Feedback>
              <Form.Control.Feedback className="feedbackCustom">

              </Form.Control.Feedback>
            </Form.Group>

            {/* <Card.Title> Datos de la cita</Card.Title>
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
            required
              onChange={(e) => handleChange(e)}
              type="date"
              name="fecha"
              value={fecha}
            />
          </Form.Group> */}
            {/* <Form.Group>
            <Form.Label>Hora</Form.Label>
            <Form.Control
            required
              onChange={(e) => handleChange(e)}
              type="time"
              name="hora"
              value={hora}
            />
          </Form.Group> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button type='submit' className='botoncita'>Programar</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div></div>
      </Container>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header style={{background:'#27d85a', color:'#FAFAFA'}}>
           Cita guardada!
            </Modal.Header >
        <Modal.Body>
          Un agente se contactará pronto para informarle la hora de la cita programada, gracias por confiar en nosotros. <br />
              Atte. Domus.
            </Modal.Body>
        <Modal.Footer>
          <Link to={`/cliente/inicio`}>
            <Button type='primary' className="btn btn-success">
              Aceptar
              </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormCita;
