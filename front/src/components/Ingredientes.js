import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';




function Ingredientes() {
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
         <h3><label><input style={{height: "15px", width: "15px"}} type="checkbox"/>Jamón</label>
         <br/>
         <label><input style={{height: "15px", width: "15px"}} type="checkbox"/>Champiñones</label>
         <br/>
         <label><input style={{height: "15px", width: "15px"}} type="checkbox"/>Pimenton</label>
         <br/>
         <label><input style={{height: "15px", width: "15px"}} type="checkbox"/>Doble queso</label>
         <br/>
         <label><input style={{height: "15px", width: "15px"}} type="checkbox"/>Aceitunas</label>
         <br/>
         <label><input style={{height: "15px", width: "15px"}} type="checkbox"/>Peperoni</label>
         <br/>
         <label><input style={{height: "15px", width: "15px"}} type="checkbox"/>Salchichón</label></h3>
         <MenuButton size={"150px"} path={"/Pregunta"}>Confirmar</MenuButton>
       </VerticalAlign>
     </Layout>
  );
}

export default Ingredientes;