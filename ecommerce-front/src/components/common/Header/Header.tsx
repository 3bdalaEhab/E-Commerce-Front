import { Badge ,Nav ,Navbar , Container} from "react-bootstrap";
import { HeaderBasket } from "../../ecommerce";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
const { headerContainer, headerLogo } = styles;

const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>our</span> <Badge bg="info">Ecom</Badge>
        </h1>
        <HeaderBasket />
      </div>

      <Navbar expand="lg" className="bg-body-tertiary rounded-3">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
              <Nav.Link as={NavLink} to="products">Products</Nav.Link>
              <Nav.Link as={NavLink} to="aboutUs">About</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="login">Login</Nav.Link>
              <Nav.Link as={NavLink} to="register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
