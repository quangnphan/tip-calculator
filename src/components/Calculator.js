import { useState, useEffect } from "react";
import Button from "../components/Button";
import person from "../images/icon-person.svg";
import dollar from "../images/icon-dollar.svg";

const Calculator = () => {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState("");
  const [people, setPeople] = useState("");

  useEffect(() => {
    if (bill !== "" && people !== "" && percent !== "") {
      const amountPerPerson = bill / people;
      const tip = (percent / 100) * amountPerPerson;
      const total = (amountPerPerson + tip).toFixed(2);
      setAmount(tip);
      setTotal(total);
    } else {
      setAmount(0);
      setTotal(0);
    }
  }, [bill, people, percent]);

  const handleInput = (e) => {
    setPercent(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleReset = () => {
    setBill("");
    setPeople("");
    setPercent("");
  };
  return (
    <div className="calc">
      <form onSubmit={handleSubmit}>
        <label className="bill">
          <h4>Bill</h4>
          <section className="input-container">
          <img src={dollar} alt="dollar icon" />
            <input
              className="input-bill"
              type="number"
              name="bill"
              placeholder="0"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </section>
        </label>
        <label className="percent">
          <h4>Select Tip %</h4>
          <section className="select-container">
            <Button setPercent={setPercent} value={5} />
            <Button setPercent={setPercent} value={10} />
            <Button setPercent={setPercent} value={15} />
            <Button setPercent={setPercent} value={25} />
            <Button setPercent={setPercent} value={50} />
            <input
              className="custom"
              type="number"
              placeholder="custom"
              onChange={handleInput}
            />
          </section>
        </label>
        <label className="people">
          <h4>Number of People</h4>
          <section className="input-container">
            <img src={person} alt="person" />
            <input
              className="input-people"
              type="number"
              name="people"
              placeholder="0"
              onChange={(e) => {
                setPeople(e.target.value);
              }}
              value={people}
            />
          </section>
        </label>
      </form>
      <div className="screen">
        <div className="result">
          <div className="amount-result">
            <span>
              <h3>Tip Amount</h3>
              <h4>/ person</h4>
            </span>
            <h1>${Number(amount).toFixed(2)}</h1>
          </div>
          <div className="total-result">
            <span>
              <h3>Total</h3>
              <h4>/ person</h4>
            </span>
            <h1>${Number(total).toFixed(2)}</h1>
          </div>
        </div>
        <button className="reset" type="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Calculator;
