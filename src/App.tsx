import { useState } from 'react';
import { Button } from 'antd';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <Button type="primary" onClick={onClick}>
        Click
      </Button>
    </>
  );
}

export default App;
