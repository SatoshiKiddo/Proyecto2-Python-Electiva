import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'


const Datos = () => {

  const history = useHistory();
  const [nombre,setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const crearFactura = (event) => {
    console.log("Se crea factura.");
    let data = {
      "nombre": nombre,
      "apellido": apellido
    }
    let options = {
      method: 'POST',
      body: JSON.stringify(data)
    };
    fetch('http://127.0.0.1:8000/caja/addFactura', options).then(
      res => {
        const factura = res.json();
        factura.then((respuesta) => {
          console.log(respuesta.factura_id);
          history.push(`/Size/${respuesta.factura_id}`)
        });
      });
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
        <center><h3>Datos del Cliente:</h3></center>
        <strong>
          <label>Nombre: <input className="btn input" type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} /></label>
        </strong>
        <strong>
          <label>Apellido: <input className="btn input" type="text" id="apellido" onChange={ e => setApellido(e.target.value) } /></label>
        </strong>

        <MenuButton size={"150px"} path={`/Size`} onClick={crearFactura} >Confirmar</MenuButton>

      </VerticalAlign>
    </Layout>

  );
}

export default Datos;