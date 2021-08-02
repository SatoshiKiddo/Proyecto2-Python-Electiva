import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';

var nombre=""
var apellido=""
var factura=0
const axios = require('axios');

function changeApellido(event){
  apellido=event.target.value;
}

function changeNombre(event){
  nombre=event.target.value;
  console.log(event.target.value)
}

function crearFactura(event){
  console.log("Se crea factura.");
  let data={
    "nombre":nombre,
    "apellido":apellido
  }
  let options= {
    method: 'POST',
    body: JSON.stringify(data)
  };
  fetch('http://127.0.0.1:8000/caja/addFactura',options).then(
                res => {
                  factura=res.json();
                  factura.then((respuesta) => {
                    console.log(respuesta.factura_id);
                    factura= respuesta.factura_id;
                  });
                });
}

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
          <label>Nombre: <input className="btn input" type="text" id="nombre" onChange={changeNombre}/></label>
        </strong>
        <strong>
          <label>Apellido: <input className="btn input" type="text" id="apellido" onChange={changeApellido} /></label>
        </strong>
        <div onClick={crearFactura}>
          <MenuButton size={"150px"} path={"/Size"} factura={factura}>Confirmar</MenuButton>
        </div>
      </VerticalAlign>
    </Layout>

  );
}

export default Datos;