import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';




function Inicio() {
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
        <h3>Agregar otro sandwich?</h3>
        <label> <MenuButton size={"150px"} path={"/Size"}>Si</MenuButton>
          <MenuButton size={"150px"} path={"/Resumen"}>No</MenuButton></label>
      </VerticalAlign>
    </Layout>
  );
}

export default Inicio;