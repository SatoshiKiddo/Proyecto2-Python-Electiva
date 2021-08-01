import logo from './../logo.svg';
import './../App.css';
import MenuButton from './Button';
import Layout from './Layout';
import VerticalAlign from './VerticalAlign';




function Size() {
  return (
    <div>
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
        <h3>Tamaño</h3>
         <MenuButton size={"250px"} path={"/Ingredientes"}>Triple</MenuButton>
         <MenuButton size={"250px"} path={"/Ingredientes"}>Doble</MenuButton>
         <MenuButton size={"250px"} path={"/Ingredientes"}>Individual</MenuButton>
       </VerticalAlign>
     </Layout>
    </div>
  );
}

export default Size;