import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import logo from './images/logo-freecodecamp.png';
import { useState } from 'react';

const App = () => {
  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className='container'>
      <div className='container container-img'>
        <img className='img-fluid mx-auto d-block logo-freecodecamp' alt='logo freecodecamp' src={logo}/>
      </div>
      <div className='container'>
        <Counter clicksNumber={numClicks} />
        <Button text="Click" clickButton={true} handleClick={handleClick} />
        <Button text="Reset" clickButton={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
