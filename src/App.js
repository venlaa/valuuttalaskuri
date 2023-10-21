
import './App.css';
import { useState } from 'react';

function App() {

  const URL = 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_JCAkjIBRbHnSoXrJXikCAzNLUGEh5eTZAEHgVf2S'
  const[eur, setEur] = useState(0);
  const[gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);

  const convert = (e) => {
    e.preventDefault()
    axios.get(URL)
    .then((response) => {
      const json = response.data
      setRate(json.data.GBP);
      setGbp(eur * json.data.GBP);
    }).catch (error => {
      alert(error)
    })
  }

  return (
    <div id="container">
      <form onSubmit={convert}>
        <div>
          <label>Eur</label>&nbsp;
          <input type="number" step="0.01"
          value={eur} onChange={e => setEur(e.target.value)}></input>
          <output>{rate}</output>
        </div>
        <div>
          <label>Gbp</label>
          <output>{gbp.toFixed(2)} €</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
