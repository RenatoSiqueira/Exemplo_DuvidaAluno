import React, { useState } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState({})
  const handleChangeColor = evt => {
    setActive({
      active: evt.target.name
    })
  }

  const styleDefault = { backgroundColor: 'yellow', borderColor: '#000', padding: '2em' }
  const styleSelected = { backgroundColor: 'red', borderColor: 'yellow', padding: '3em' }

  const MyButton = ({ name }) => {
    return <button
      style={active.active === name ? styleSelected : styleDefault}
      onClick={handleChangeColor}
      name={name} >
      {name}
    </button>
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Status: {JSON.stringify(active)}</p>
        <MyButton name={'item1'} />
        <MyButton name={'item2'} />
      </header>
    </div>
  );
}

export default App;
