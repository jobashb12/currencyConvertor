import "./InputBox.css";

const InputBox = ({
  label,
  amount,
  options = [],
  selectOption = "usd",
  className = "",
  onAmountChange,
  onOptionChange,
  amountDisable = false,
}) => {
  return (
    <div className={`input ${className}`}>
      <div className="input_wrapper">
        <div className="left">
          <label htmlFor={label}>{label}</label>
          <input
            type="number"
            value={amount}
            onChange={e =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            disabled={amountDisable}
          />
        </div>
        <div className="right">
          <label htmlFor="Currency Type">Currency Type</label>
          <select
            value={selectOption}
            onChange={e => onOptionChange && onOptionChange(e.target.value)}
          >
            {options.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
