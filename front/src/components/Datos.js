import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';




function Datos() {
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
        <center><h3>Datos del Cliente:</h3></center>
        <strong>
          <label>Nombre: <input className="btn input" type="text" id="nombre" /></label>
        </strong>
        <strong>
          <label>Apellido: <input className="btn input" type="text" id="apellido" /></label>
        </strong>
        <MenuButton size={"150px"} path={"/Size"}>Confirmar</MenuButton>
      </VerticalAlign>
    </Layout>

  );
}

export default Datos;