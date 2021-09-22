import Calculator from './components/Calculator'
import Logo from "./images/logo.svg";

function App() {
  return (
    <div>
      <img className="logo" src={Logo} alt="logo"/>
      <Calculator />
    </div>
  );
}

export default App;
