import { useEffect, useState } from "react";
import "./index.css";
//C ПОДСКАЗКАМИ:
/*
// 1 - Получите массив всех валют из API Frankfurter и запишите его в state.
// 2 - Используя map, динамически создайте options внутри select.
// 3 - Получите значения выбранных валют из обоих select и запишите их в state fromCurrency и toCurrency.
// 4 - Создайте state для записи amount из input. Запишите данные из input в этот state.
// 5 - Создайте вторую асинхронную функцию для получения значения конвертации двух валют. Запишите результат конвертации в новый state - convertedAmount. Покажите результат в интерфейсе.
// 6 - Добавьте в обе функции блоки try/catch/finally. Создайте state для loading (true/false) и error ("Сообщение ошибки").
// 7 - Внедрите логику отображения загрузки и ошибок в интерфейсе.
// 8 - Добавьте проверку, чтобы amount был больше 0.
*/

//https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD

const API_URL = "https://api.frankfurter.app/";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KRW");
  const [amount, setAmount] = useState(1);
  const [convertedResult, setConvertedResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCurrencies() {
      try {
        const res = await fetch(`${API_URL}latest`);
        const data = await res.json();
        setCurrencies(Object.keys(data.rates));
      } catch {
        setError("Failed to fetch list of currencies");
      }
    }
    getCurrencies();
  }, []);

  async function handleConvert() {
    if (!amount || amount <= 0) {
      setError("Amount should be greater than zero");
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      const res = await fetch(
        `${API_URL}latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConvertedResult(data.rates[toCurrency]);
    } catch {
      setError("Failed to convert currencies");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>Currency Exchange Calculator</h1>

      <div className="converter-container">
        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <input
            type="number"
            placeholder="Amount"
            className="input-field"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            className="dropdown"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <span className="arrow">→</span>
          <select
            className="dropdown"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button className="convert-button" onClick={handleConvert}>
          Convert
        </button>
        {isLoading && <p className="loading">Converting...</p>}

        {convertedResult !== null && !isLoading && (
          <p className="result">
            {amount} {fromCurrency} = {convertedResult.toFixed(2)} {toCurrency}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
