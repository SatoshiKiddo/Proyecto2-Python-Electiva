import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';
import { useHistory, useParams } from 'react-router-dom';




function Size() {

  const history = useHistory();
  const { id } = useParams()

  const linkIng = (event) => {
    console.log("Se selecciona tamano.");
    history.push(`/Ingredientes/${id}/${event.target.id}`)
  }



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
        <h3>Tamaño</h3>
        <MenuButton size={"250px"} path={"/Ingredientes"} id={3} onClick={linkIng}>Triple</MenuButton>
        <MenuButton size={"250px"} path={"/Ingredientes"} id={2} onClick={linkIng}>Doble</MenuButton>
        <MenuButton size={"250px"} path={"/Ingredientes"} id={1} onClick={linkIng}>Individual</MenuButton>
      </VerticalAlign>
    </Layout>

  );
}

export default Size;