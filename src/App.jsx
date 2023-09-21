import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

const App = () => {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const data = useCurrencyInfo(from);

  const options = Object.keys(data);

  const convertAmount = () => {
    setConvertedAmount(data[to] * amount);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(data[to] * amount);
  };
  return (
    <div className="main">
      <div className="formWrapper">
        <form
          onSubmit={e => {
            e.preventDefault();
            convertAmount();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={value => setAmount(value)}
            options={options}
            selectOption={from}
            onOptionChange={option => setFrom(option)}
          />
          <div className="swap_btn">
            <span onClick={swap}>swap</span>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            options={options}
            selectOption={to}
            onOptionChange={option => setTo(option)}
            amountDisable
          />
          <button type="submit" className="btn">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
