import { createContext } from "react";
import "./App.css";
import CosmeticsStore from "./components/CosmeticsStore";

export const CosmeticContext = createContext();

function App() {
  const cosmetics = {
    numOfSell: 100,
    bestSelling: "Lipstick",
  };

  return (
    <div className="App">
      <CosmeticContext.Provider value={cosmetics}>
        <CosmeticsStore />
      </CosmeticContext.Provider>
    </div>
  );
}

export default App;
