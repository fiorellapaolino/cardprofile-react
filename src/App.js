import React, {useState} from "react";
import './App.css';
import Card from "./components/Card/Card";

function App() {

  const [cardIndex, setCardIndex] = useState(0);

  return (
    <div>
      <Card 
        cardIndex={cardIndex} 
        setCardIndex={setCardIndex}
      />
    </div>
  );
}

export default App;
