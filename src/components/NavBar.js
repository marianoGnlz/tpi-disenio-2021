import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import globalContext from "../context/globalContext";
import Logo from "../static/images/inmoviliaria-1.svg";

const NavBar = ({ cliente }) => {
  const GlobalContext = useContext(globalContext);
  const { user, activeNavBarLink, setActiveNavbarLink } = GlobalContext;

  const items = {
    cliente: ["Inicio", "Propiedades", "Programar Cita", "¿Quienes Somos?"],
    agenteinmobiliario: ["Inicio", "Clientes", "Agenda", "Propiedades"],
    secretariacomercializacion: ["Inicio", "Agenda", "Citas"],
    cajera: [
      "Inicio",
      "Entrada/Salida",
      "Transacciones",
      "Pago alquiler",
      "Pago venta",
      "Cierre de caja",
    ],
    marketing: ["Inicio", "Propiedades"],
    admin: [],
    jefacomercializacion: ["Inicio", "Propiedades", "Agenda", "Clientes"],
    reportesjefacomercializacion: ["Ventas", "Alquileres", "Propiedades"],
    jefaadministracion: ["Inicio", "Transacciones", "Clientes"],
    gerentegeneral: [
      "Inicio",
      "Clientes",
      "Alquileres",
      "Entradas/Salidas",
      "Propiedades",
      "Transacciones",
      "Ventas",
    ],
  };

  const handleClick = (i) => {
    setActiveNavbarLink(`link-${i}`);
  };

  return (
    <Navbar className={cliente ? "navbar-clear" : "navbar-color"} expand="lg">
      <Navbar.Brand>
        <Link to={`/${user}/inicio`} className="d-flex align-items-center">
          <img src={Logo} alt="logo" style={{ maxHeight: "60px" }} />
          <h3
            className="mt-3 ml-3"
            style={{ fontWeight: "700", color: "white" }}
          >
            Domus
          </h3>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="ml-auto"
          variant="pills"
          defaultActiveKey={activeNavBarLink}
        >
          {user &&
            items[user].map((item, i) => (
              <Nav.Item onClick={() => handleClick(i)} key={i}>
                <Nav.Link
                  as={Link}
                  to={`/${user}/${item
                    .toLowerCase()
                    .replace(" ", "")
                    .replace(" ", "")
                    .replace("¿", "")
                    .replace("/", "")
                    .replace(".", "")}`}
                  eventKey={`link-${i}`}
                >
                  {item}
                </Nav.Link>
              </Nav.Item>
            ))}
          {user === "jefacomercializacion" ? (
            <NavDropdown title="Reportes" id="nav-dropdown" alignRight>
              {items[`reportes${user}`].map((item, i) => (
                <NavDropdown.Item
                  key={i}
                  as={Link}
                  to={`/${user}/r${item}`}
                  eventKey={`4.${i}`}
                >
                  {item}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          ) : null}
          <NavDropdown title="Mi Perfil" id="nav-dropdown" alignRight>
            <NavDropdown.Item eventKey="4.1">Mi perfil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} eventKey="4.2" to="/">
              Cerrar Sesión
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
