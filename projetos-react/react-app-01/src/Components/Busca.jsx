import { useState } from "react";
import "./Busca.css";

function Busca() {

    const [pesquisa, setPesquisa] = useState("");
    const [erro, setErro] = useState(false);

    //console.log(pesquisa);

    function handleSubmit(e) {
        e.preventDefault();

        if(pesquisa.trim() === "") {
            setErro(true);
            setTimeout(() => setErro(false), 2000);
            return;
        }
    }

    return (
        <div className="form-busca">
            <h2>Formulário de Busca</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Busca:</label>
                <input type="text" placeholder="Pesquise aqui..." value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} />
                {erro && <p className="error">Esse campo é obrigatório!</p>}
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}

export default Busca;
