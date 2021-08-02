import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';
import { useHistory, useParams } from 'react-router-dom';




function Inicio() {

  const history = useHistory();

  return (
    <Layout>
      <VerticalAlign>
        <img
          src={logo}
          alt="logo"
          style={{ height: "100px", width: "100px" }}
        />
        <h1>SandwichesUCAB</h1>
      </VerticalAlign>

      <VerticalAlign>
        <MenuButton size={"250px"} path={"/Datos"} onClick={() => history.push(`/Datos`)}>Nuevo Pedido</MenuButton>
        <MenuButton size={"250px"}>Opc. Administrador</MenuButton>
      </VerticalAlign>
    </Layout>
  );
}

export default Inicio;