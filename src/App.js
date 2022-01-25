import "./App.css";
import Cart from "./components/Cart/Cart";
import List from "./components/List/List";
import { ShoppingProvider } from "./store/shopping-context";

function App() {
  return (
    <div className="App">
      <ShoppingProvider>
        <List />
        <Cart />
      </ShoppingProvider>
    </div>
  );
}

export default App;
