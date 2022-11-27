import { useContext } from "react";
import { CosmeticContext } from "../App";
import WareHouse3 from "./WareHouse3";

const WareHouse2 = () => {
  const { numOfSell, bestSelling } = useContext(CosmeticContext);

  return (
    <div>
      <h1>
        {numOfSell} && {bestSelling}
      </h1>
      <WareHouse3 />
    </div>
  );
};

export default WareHouse2;
