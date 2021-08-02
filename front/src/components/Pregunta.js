import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';
import { useHistory, useParams } from 'react-router-dom';




function Inicio() {


  const history = useHistory();
  const {id} = useParams();

  const linkResumen = (event) => {
    history.push(`/Resumen/${id}`)
  }

  const linkSize = (event) => {
    history.push(`/Size/${id}`)
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
        <h3>Agregar otro sandwich?</h3>
        <label> <MenuButton size={"150px"} path={"/Size"} onClick={linkSize}>Si</MenuButton>
          <MenuButton size={"150px"} path={"/Resumen"} onClick={linkResumen}>No</MenuButton></label>
      </VerticalAlign>
    </Layout>
  );
}

export default Inicio;