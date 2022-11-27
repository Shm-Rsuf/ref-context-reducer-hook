import { CosmeticContext } from "../App";

const WareHouse3 = () => {
  return (
    <div>
      <CosmeticContext.Consumer>
        {({ numOfSell, bestSelling }) => {
          return (
            <>
              <h2>
                Number of sell : {numOfSell} & Number of best sell :{" "}
                {bestSelling}
              </h2>
            </>
          );
        }}
      </CosmeticContext.Consumer>
    </div>
  );
};

export default WareHouse3;
