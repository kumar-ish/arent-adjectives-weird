import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Box = styled.div`
  flex: 0 0 calc(20% - 160px);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  font-size: 20px;
  font-weight: bold;
`;

interface WordBoxProps {
  words: string[];
}

const WordBox: React.FC<WordBoxProps> = ({ words }) => {
  const [shuffledWords, setShuffledWords] = useState<string[]>(words.slice(0, -1));

  const lastWord = words[words.length - 1];

  const handleJumble = () => {
    // Using Fisher-Yates algorithm
    const newShuffledWords = [...shuffledWords];
    for (let i = newShuffledWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newShuffledWords[i], newShuffledWords[j]] = [newShuffledWords[j], newShuffledWords[i]];
    }
    setShuffledWords(newShuffledWords);
  };

  return (
    <Container>
      {shuffledWords.map((word, index) => (
        <Box key={index}>{word}</Box>
      ))}
      <Box style={{textDecoration: "underline"}}>{lastWord}</Box>
      <button onClick={handleJumble}>Jumble</button>
    </Container>
  );
};

export default WordBox;
