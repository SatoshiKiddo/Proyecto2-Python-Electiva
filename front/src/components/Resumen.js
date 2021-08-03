import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

var count =0
function Resumen() {

  var [factura_id, setFactura_id] = useState("");
  var [nombre, setNombre] = useState("");
  var [apellido, setApellido] = useState("");
  var [precio_total, setPrecio_total] = useState("");
  var [impresion,setImpresion] = useState([]);

  const history = useHistory();
  const { id } = useParams();

  const linkInicio = (event) => {
    history.push(`/Inicio`)
  }

  useEffect(() =>  {
    if (count == 0){
      count=1;
    fetch('http://127.0.0.1:8000/caja/getFactura/' + id, options).then(
      res => {
        const factura = res.json();
        factura.then((respuesta) => {
          setNombre(respuesta.nombre);
          setApellido(respuesta.apellido);
          setFactura_id(respuesta.factura_id);
          setPrecio_total(respuesta.precio_total);
        });
      });
    fetch('http://127.0.0.1:8000/caja/getSandwiches/' + id, options).then(
      res => {
        var arreglo = [];
        const sandwiches = res.json();
        sandwiches.then((sandwiches) => {
          sandwiches.forEach(element => {
            arreglo.push(element);
          });
          setImpresion(arreglo);
        });
      });
    }
  })

  let options = {
    method: 'GET'
  };

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
                  <label>
                    {impresion.map((sandwich) => {
                      <label>
                      <p>tamano: {sandwich.size.name}</p>
                      <p>precio tamano: {sandwich.size.price}</p>
                      <p>Ingredientes:</p>
                      <li>
                      {sandwich.ingredients.forEach(element => <ul>Ingrediente: {element.name} - Precio: {element.price}</ul>)}
                      </li>
                      <p>Total: {sandwich.total}</p>
                      </label>
                    })}
                  </label>
            </label>
            <label><MenuButton size={"150px"} path={"/Resumen"} onClick={linkInicio}>Inicio</MenuButton></label>
          </VerticalAlign>
        </Layout>
      );
}

export default Resumen;