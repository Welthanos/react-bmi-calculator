import './app.css';
import { useState } from 'react';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / alt ** 2;

    if (imc < 18.5) {
      setMensagem(`Seu IMC: ${imc.toFixed(2)} – Abaixo do peso!`)
    } else if (imc >= 18.5 && imc < 25.0) {
      setMensagem(`Seu IMC: ${imc.toFixed(2)} – Peso ideal!`)
    } else if (imc >= 25.0 && imc < 30.0) {
      setMensagem(`Seu IMC: ${imc.toFixed(2)} – Acima do peso!`)
    } else if (imc >= 30.0 && imc < 35.0) {
      setMensagem(`Seu IMC: ${imc.toFixed(2)} – Obesidade tipo I!`)
    } else if (imc >= 35.0 && imc < 40.0) {
      setMensagem(`Seu IMC: ${imc.toFixed(2)} – Obesidade tipo II!`)
    } else if (imc >= 40.0) {
      setMensagem(`Seu IMC: ${imc.toFixed(2)} – Obesidade mórbida!`)
    }
  }

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <span>Vamos calcular o seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso(kg) - Ex.: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura(cm) - Ex.: 175"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>Calcular</button>

      </div>

      <h2>{mensagem}</h2>
    </div>
  );
}

export default App;
