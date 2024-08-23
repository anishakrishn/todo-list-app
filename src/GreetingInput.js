import React, { useState } from 'react';
import Greeting from './Greeting';

function GreetingInput() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      <Greeting name={name} />
    </div>
  );
}

export default GreetingInput;