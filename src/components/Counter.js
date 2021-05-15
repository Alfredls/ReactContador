import React, { useState } from "react";

export const Counter = () => {
  const [conta1, setConta1] = useState(0);
  const [conta2, setConta2] = useState(0);
  const [conta3, setConta3] = useState(0);
  const [conta4, setConta4] = useState(0);
  const [sumT, setSum] = useState(0);

  //cambio clase
  function getClasses(getDato) {
    let classes = "badge rounded-pill me-2 fw-bolder ";

    classes += getDato === 0 ? "bg-warning text-dark" : "bg-primary";
    return classes;
  }

  function getValue(getDato) {
    let valor = getDato === 0 ? "Cero" : getDato;
    return valor;
  }

  ////////////////OPERACIONES/////////////////////

  const getMore = (getDato, setDato) => {
    setDato(getDato + 1);
    setSum(sumT + 1);
  };
  function getLess(getDato, setDato) {
    do {
      if (getDato === 0) break;
      setDato(getDato - 1);
      setSum(sumT - 1);
    } while (getDato === 0);
  }

  function getReset(setDato, getDato) {
    setDato(0);
    setSum(sumT - getDato);
  }

  /////////////////////////

  function getResetAll() {
    setConta1(0);
    setConta2(0);
    setConta3(0);
    setConta4(0);
    setSum(0);
  }

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mt-2 mb-3">
        <div className="container-fluid">
          <h2 className="navbar-brand fw-bold">CONTADOR</h2>
          <span className="badge rounded-pill bg-secondary">{sumT}</span>
        </div>
      </nav>
      <div>
        <button
          onClick={getResetAll}
          type="button"
          className="btn btn-primary pt-1 pb-1 fw-linght mb-3 fs-4"
        >
          Reiniciar
        </button>
      </div>

      <div className="mb-2">
        <span className={getClasses(conta1)}>{getValue(conta1)}</span>
        <button
          onClick={() => getMore(conta1, setConta1)}
          type="button"
          className="btn btn-secondary me-2 pt-2 pb-2 fw-bolder"
        >
          +
        </button>
        <button
          onClick={() => getLess(conta1, setConta1)}
          type="button"
          className="btn btn-secondary me-2 pt-2 pb-2 fw-bolder"
        >
          -
        </button>
        <button
          onClick={() => getReset(setConta1, conta1)}
          type="button"
          className="btn btn-danger pt-2 pb-2 fw-bolder"
        >
          Resetear
        </button>
      </div>

      <div className="mb-2">
        <span className={getClasses(conta2)}>{getValue(conta2)}</span>
        <button
          onClick={() => getMore(conta2, setConta2)}
          type="button"
          className="btn btn-secondary me-2 pt-2 pb-2 fw-bolder"
        >
          +
        </button>
        <button
          onClick={() => getLess(conta2, setConta2)}
          type="button"
          className="btn btn-secondary me-2 pt-2 pb-2 fw-bolder"
        >
          -
        </button>
        <button
          onClick={() => getReset(setConta2, conta2)}
          type="button"
          className="btn btn-danger pt-2 pb-2 fw-bolder"
        >
          Resetear
        </button>
      </div>

      <div className="mb-2">
        <span className={getClasses(conta3)}>{getValue(conta3)}</span>
        <button
          onClick={() => getMore(conta3, setConta3)}
          type="button"
          className="btn btn-secondary me-2 pt-2 pb-2 fw-bolder"
        >
          +
        </button>
        <button
          onClick={() => getLess(conta3, setConta3)}
          type="button"
          className="btn btn-secondary me-2 pt-2 pb-2 fw-bolder"
        >
          -
        </button>
        <button
          onClick={() => getReset(setConta3, conta3)}
          type="button"
          className="btn btn-danger pt-2 pb-2 fw-bolder"
        >
          Resetear
        </button>
      </div>

      <div className="mb-2">
        <span className={getClasses(conta4)}>{getValue(conta4)}</span>
        <button
          onClick={() => getMore(conta4, setConta4)}
          type="button"
          className="btn btn-secondary me-2 pt-2 pb-2 fw-bolder"
        >
          +
        </button>
        <button
          onClick={() => getLess(conta4, setConta4)}
          type="button"
          className="btn btn-secondary me-2 pt-2 pb-2 fw-bolder"
        >
          -
        </button>
        <button
          onClick={() => getReset(setConta4, conta4)}
          type="button"
          className="btn btn-danger pt-2 pb-2 fw-bolder"
        >
          Resetear
        </button>
      </div>
    </div>
  );
};
