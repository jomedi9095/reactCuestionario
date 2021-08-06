import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import NotFound from "./pages/notfound";
import Test from "./pages/test";
import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/preguntas" component={Test}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </DataProvider>
  );
}
export default App;
