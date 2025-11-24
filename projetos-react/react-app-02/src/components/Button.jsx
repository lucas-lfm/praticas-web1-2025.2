import { useEffect, useState } from "react";
import "./Button.css";

function Button({ variant, text }) {

    const [counter, setCounter] = useState(0);

    const handlePlus = () => {
        setCounter(prevValue => prevValue + 1);
    };

    // Ciclo de vida dos componente: montagem, atualização e desmontagem
    useEffect(() => {
        console.log("Executou...");
    }, []);

    return (
        <button onClick={handlePlus} className={`btn-${variant}`}>{`${text} (${counter})`}</button>
    );
}

export default Button;