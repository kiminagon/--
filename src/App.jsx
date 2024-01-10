// App.jsx
import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';

const compliments = [
  '素晴らしい！',
  'あなたは優れています！',
  '素晴らしい仕事です！',
  '頑張っていますね！',
  'すごいですね！',
];

const App = () => {
  const [currentCompliment, setCurrentCompliment] = useState('');

  const getRandomCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    setCurrentCompliment(compliments[randomIndex]);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 4 }}>
        褒め言葉アプリ
      </Typography>
      <Button variant="contained" color="primary" onClick={getRandomCompliment}>
        この褒め言葉の文章をクリックすると使用例が見れる
      </Button>
      {currentCompliment && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          {currentCompliment}
        </Typography>
      )}
    </Container>
  );
};

export default App;
