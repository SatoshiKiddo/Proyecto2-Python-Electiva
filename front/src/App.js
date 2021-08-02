import './App.css';
import Inicio from './components/Inicio';
import Datos from './components/Datos';
import Size from './components/Size';
import Ingredientes from './components/Ingredientes';
import Pregunta from './components/Pregunta';
import Resumen from './components/Resumen';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"; 



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/Inicio" component={Inicio} />
      <Route path="/Datos" component={Datos} />
      <Route path="/Size" component={Size} />
      <Route path="/Ingredientes" component={Ingredientes} />
      <Route path="/Pregunta" component={Pregunta} />
      <Route path="/Resumen" component={Resumen} />
      <Redirect to="/Inicio"/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
