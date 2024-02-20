"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const sumar = () => {
    setError(null);
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };

  const restar = () => {
    setError(null);
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };

  const multiplicar = () => {
    setError(null);
    const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicacion: ${resultadoMultiplicacion}`);
  };

  const dividir = () => {
    setError(null);
    const numero02 = parseFloat(numero2);
    if (numero02 !== 0) {
      const resultadoDivision = parseFloat(numero1) / numero02
      setResultado(`Resultado de la division: ${resultadoDivision}`);
    } else {
      setError("Error! La division por cero no es valida")
    }
  };

  const potencia = () => {
    setError(null);
    const resultadopotencia = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la potenciacion: ${resultadopotencia}`);
  };

  const raizCuadrada = () => {
    setError(null);
    const numero01 = parseFloat(numero1);
    if (numero01 >= 0) {
      const raiz = Math.sqrt(numero01);
      setResultado(`Raiz cuadrada de ${numero1}: ${raiz}`);
    } else {
      setError("Error! Es imposible calcular la raiz cuadrada con un numero negativo")
    }
  };

  const restCalculadora = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
    setError(null);
  }

  return(
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Numero 1:</label>
          <input className={styles.inputnum} type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
        </div>
        <div className={styles.numeros}>
          <label className={styles.text}>Numero 2:</label>
          <input className={styles.inputnum} type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
        </div>
        <div>
          <button className={styles.button} onClick={sumar}>Sumar</button>
          <button className={styles.button} onClick={restar}>Restar</button>
          <button className={styles.button} onClick={multiplicar}>Multiplicar</button>        
          <button className={styles.button} onClick={dividir}>Dividir</button>
          <button className={styles.button} onClick={potencia}>Potenciar</button>
          <button className={styles.button} onClick={raizCuadrada}>Raiz Cuadrada</button>
          <button className={styles.button} onClick={restCalculadora}>Reiniciar</button>
        </div>
        {resultado && <div className={styles.resultado}>{resultado}</div>}
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </main>
  );
}