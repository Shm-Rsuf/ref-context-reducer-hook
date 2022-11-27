import { useEffect, useRef } from "react";

const BrazilVsArgentina = () => {
  const goals = {
    arg: 2,
    bra: 3,
  };

  const argRef = useRef(null);
  const braRef = useRef(null);

  useEffect(() => {
    if (goals.arg > goals.bra) {
      argRef.current.style.color = "blue";
    } else {
      braRef.current.style.color = "yellow";
    }
  }, []);

  return (
    <div>
      <h2 className="brazil" ref={braRef}>
        Brazil : {goals.bra}
      </h2>
      <h2 className="argentina" ref={argRef}>
        Argentina : {goals.arg}
      </h2>
    </div>
  );
};

export default BrazilVsArgentina;
