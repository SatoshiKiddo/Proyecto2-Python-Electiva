import './App.css';
import Inicio from './components/Inicio';
import Datos from './components/Datos';
import Size from './components/Size';
import Ingredientes from './components/Ingredientes';
import Pregunta from './components/Pregunta';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"; 



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => <Redirect to={ "/Inicio"} />} />
      <Route path="/Inicio" component={Inicio} />
      <Route path="/" exact render={() => <Redirect to={ "/Datos"} />} />
      <Route path="/Datos" component={Datos} />
      <Route path="/" exact render={() => <Redirect to={ "/Size"} />} />
      <Route path="/Size" component={Size} />
      <Route path="/" exact render={() => <Redirect to={ "/Ingredientes"} />} />
      <Route path="/Ingredientes" component={Ingredientes} />
      <Route path="/" exact render={() => <Redirect to={ "/Pregunta"} />} />
      <Route path="/Pregunta" component={Pregunta} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
