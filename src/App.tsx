import React from 'react';
import WordBox from './WordBox';

const App: React.FC = () => {
  const words = ["lovely", "little", "old", "rectangular", "green", "French", "silver", "whittling", "knife"]
  return (
    <div style={{marginTop: "20%"}}>
      <h1 style={{textAlign: "center"}}>Aren't Adjectives Weird?</h1>
      <WordBox words={words} />
    </div>
  );
};

export default App;
