import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';
import { useHistory, useParams } from 'react-router-dom';

/*{
  "message": "Factura correspondiente obtenida",
  "factura_id": 21,
  "nombre": "Pedro",
  "apellido": "Faria",
  "precio_pred": 0,
  "precio_total": 0,
  "descuento_aplicado": 0,
  "precio_delivery": 0
}

{
        "id": 4,
        "size": {
            "price": "100.00",
            "size_name": "individual"
        },
        "ingredients": [],
        "total": "100.00"
    }
    */

var factura_id="";
var nombre="";
var apellido="";
var precio_total="";
var sandwiches_t=[];
var impresion;

function Resumen() {

  const history = useHistory();
  const {id} = useParams();

  const linkInicio = (event) => {
    history.push(`/Inicio`)
  }


    console.log("Se obtiene factura.");
    let options = {
      method: 'GET'
    };
    fetch('http://127.0.0.1:8000/caja/getFactura/' + id, options).then(
      res => {
        const factura = res.json();
        factura.then((respuesta) => {
          nombre= respuesta.nombre;
          apellido= respuesta.apellido;
          factura_id= respuesta.factura_id;
          precio_total= respuesta.precio_total;
          fetch('http://127.0.0.1:8000/caja/getFactura/' + id, options).then(
            res => {
              sandwiches_t=[];
              const sandwiches = res.json();
              sandwiches.then((sandwiches) => {
              sandwiches.array.forEach(element => {
                let impresion_ing="";
                sandwiches.ingredients.array.forEach(element => {
                  impresion_ing+=<ul>Ingrediente: {element.ingredients.name} - Precio: {element.ingredients.price}</ul>
                });
                impresion+=(<label>
                  <p>tamano: {element.size.name}</p>
                  <p>precio tamano: {element.size.price}</p>
                  <p>Ingredientes:</p>
                  <li>
                    {impresion_ing}
                  </li>
                </label>);
              });
        });
      });
        });
      });
  
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
            <h3>Factura - Resumen</h3>
            <label>
                  <p>Factura id: {factura_id}</p>
                  <p>Nombre: {nombre} - Apellido: {apellido}</p>
                  <p>Precio Total: {precio_total}</p>
            </label>
            <label><MenuButton size={"150px"} path={"/Resumen"} onClick={linkInicio}>Inicio</MenuButton></label>
          </VerticalAlign>
        </Layout>
      );
}

export default Resumen;