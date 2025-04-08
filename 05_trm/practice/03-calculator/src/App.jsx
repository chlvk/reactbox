import { useState } from "react";
import "./index.css";

//Rus
//1 - Создайте состояние input, которое будет отображать результат вычислений в калькуляторе.
//2 - Создайте 2 функции для увеличения или уменьшения значения input на +1 или -1 и назначьте их на кнопки +1 / -1.
//3 - Создайте функцию, которая будет выполнять определенную операцию на калькуляторе в зависимости от нажатой кнопки. В результате работы этой функции должен получиться полностью рабочий калькулятор. Используйте эту функцию в обработчиках событий для всех кнопок.

//P.S. Если сложно продумать одну универсальную функцию, можете создать столько функций, сколько нужно. Не переживайте о чистоте кода.

//P.P.S. В JavaScript есть метод eval(), который преобразует любую строку в JavaScript-выражение.
//Пример: eval("console.log('Hello')") — выполнит этот код.
// Используйте этот метод для всех операций в калькуляторе.

function Calculator() {
  const [input, setInput] = useState("0");
  function handleClick(symb) {
    if (symb === "=") {
      setInput((prev) => eval(prev).toString());
      return;
    }
    if (symb === "C") {
      setInput("0");
      return;
    }
    setInput((prev) =>
      String(prev === "0" && symb === "0" ? "0" : prev + symb)
    );
  }
  function calculateShortcut(addition) {
    setInput((prev) => eval(prev + addition).toString());
  }
  return (
    <div className="calculator-container">
      <h1 className="calculator-title">UseState Calculator</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="increment-buttons">
          <button
            className="increment"
            onClick={() => calculateShortcut("*1000")}
          >
            x1000
          </button>
          <button className="decrement" onClick={() => calculateShortcut("*2")}>
            x2
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button className="operator" onClick={() => handleClick("+")}>
            +
          </button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button className="operator" onClick={() => handleClick("-")}>
            -
          </button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button className="operator" onClick={() => handleClick("*")}>
            ×
          </button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>,</button>
          <button className="equals" onClick={() => handleClick("=")}>
            =
          </button>
          <button className="operator" onClick={() => handleClick("/")}>
            ÷
          </button>
          <button className="clear" onClick={() => handleClick("C")}>
            C
          </button>
        </div>
      </div>
      <div className="technologies-used">
        <p>
          <strong>Technologies used:</strong> React, JSX, CSS Modules,
          JavaScript (useState, events handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;
