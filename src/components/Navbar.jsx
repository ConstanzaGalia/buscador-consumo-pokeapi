import { Row, Col } from "antd";
import pokebola from "../img/pokebola.png";

const Navbar = () => {
  return (
  <>
    <Row className="navbar">
      <Col span={4}>
        <img src={pokebola} alt="" className="pokebolaNavbar" />
      </Col>
      <Col span={20} className="titleNavbar">
        <h4>Buscador de pokemones</h4>
      </Col>
    </Row>
  </>
  )
};

export default Navbar;
