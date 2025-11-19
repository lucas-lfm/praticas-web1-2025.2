import { useState } from "react";
import "./Contador.css";

function Contador() {
  // useState é um hook do React para gerenciar os estados dos componentes
  // Estado é o conjunto de informações manipuladas pelo componente
  // Mudanças nos estados, geram novas renderizações
  const [valor, setValor] = useState(0);

  console.log(valor);

  function handleValorPlus() {
    setTimeout(() => setValor(
        prevValue => prevValue + 1
    ), 2000);
  }

  function handleValorMinus() {
    setValor(prevValue => prevValue - 1);
  }

  return (
    <div className="contador">
      <p>Valor atual: {valor}</p>

      <div className="btn-grupo">
        <button onClick={handleValorMinus}>-</button>
        <button onClick={handleValorPlus}>+</button>
      </div>
    </div>
  );
}

export default Contador;
