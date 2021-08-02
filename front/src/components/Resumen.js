import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';




function Resumen() {
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
        <center><h3>Resumen:</h3></center>
        <h3><label># de Sandwiches:</label>
         <br/>
         <label>Tamaño:</label>
         <br/>
         <label>Ingredientes:</label>
         <br/>
         <label>Precio: </label>
         <br/>
         <label>Precio total: </label>
         <br/>
         <label>Cliente: </label></h3>
        <MenuButton size={"150px"} path={"/Inicio"}>Inicio</MenuButton>
      </VerticalAlign>
    </Layout>

  );
}

export default Resumen;