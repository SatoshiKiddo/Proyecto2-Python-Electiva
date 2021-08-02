import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';
import { useHistory, useParams } from 'react-router-dom';

var ing=[]


function Ingredientes() {

  const history = useHistory();
  const { id, ingid } = useParams();

  const linkPreg = (event) => {
    console.log("Se crea sandwich.");
    var ingredientes_b= []
    var ingred
    ing.forEach(element => {
      let idit = parseInt(element);
      console.log(element);
      ingred={
                "ingredient_id" : idit,
                "quantity": 1
        };
      ingredientes_b.push(ingred)
    });
    let data = {
      "ingredients" : ingred,
      "size_id": ingid,
      "factura": id
    }
    let options = {
      method: 'POST',
      body: JSON.stringify(data)
    };
    fetch('http://127.0.0.1:8000/caja/addSandwich', options).then(
      res => {
        const respuesta = res.json();
        respuesta.then((respuesta_i) => {
          console.log(respuesta_i);
          history.push(`/Pregunta/${id}`)
        });
      });
  }

  const addIng = (event) => {
    const index = ing.indexOf(event.target.id);
    if(event.target.checked){
      if (index == -1) {
        ing.push(event.target.id);
      }
    }
    else{
      if (index > -1) {
        ing.splice(index, 1);
      }
    }
    console.log(ing)
  }

  return (
     <Layout>
       <VerticalAlign>
         <img
         src={logo}
         alt="logo"
         style={{height: "100px", width: "100px"}}
         />
         <h1>SandwichesUCAB</h1>
       </VerticalAlign>

       <VerticalAlign>
        <h2 className="subtitulo">Ingredientes:</h2> 
         <h3><label><input style={{height: "15px", width: "15px"}} type="checkbox" id={1} onClick={addIng}/>Jamón</label>
         <br/>
         <label><input style={{height: "15px", width: "15px"}} type="checkbox" id={1} onClick={addIng}/>Champiñones</label>
         <br/>
         <label><input style={{height: "15px", width: "15px"}} type="checkbox" id={1} onClick={addIng}/>Pimenton</label>
         <br/>
         <label><input style={{height: "15px", width: "15px"}} type="checkbox" id={1} onClick={addIng}/>Doble queso</label>
         <br/>
         <label><input style={{height: "15px", width: "15px"}} type="checkbox" id={1} onClick={addIng}/>Aceitunas</label>
         <br/>
         <label><input style={{height: "15px", width: "15px"}} type="checkbox" id={1} onClick={addIng}/>Peperoni</label>
         <br/>
         <label><input style={{height: "15px", width: "15px"}} type="checkbox" id={1} onClick={addIng}/>Salchichón</label></h3>
         <MenuButton size={"150px"} path={"/Pregunta"} onClick={linkPreg}>Confirmar</MenuButton>
       </VerticalAlign>
     </Layout>
  );
}

export default Ingredientes;