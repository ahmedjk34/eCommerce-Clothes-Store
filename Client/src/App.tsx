import { ContextType, createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/pages/global-rules.scss";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Men from "./components/Men";
import Women from "./components/Women";
import About from "./components/About";
import { Item } from "./Types";
import Cart from "./components/Cart";

//@ts-ignore
export const cartContext = createContext<ContextType | null>(null);
function App() {
  const [cart, setCart] = useState<Item[] | []>([]);
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Men" element={<Men />}></Route>
          <Route path="/Women" element={<Women />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </>
    </cartContext.Provider>
  );
}

export default App;
