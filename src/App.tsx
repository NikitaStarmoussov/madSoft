import { useState } from 'react';
import './App.css';
import { TestForm } from './components/testForm/';
import { QuestionsProvider } from './providers/questionsContext';
import { TestDescription } from './components/testDescription';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const handleStartTest = () => {
    setIsStarted(true);
  };

  return (
    <>
      <QuestionsProvider>
        {!isStarted ? <TestDescription handler={handleStartTest} /> : <TestForm isStarted={isStarted} setIsStarted={setIsStarted} />}
      </QuestionsProvider>
    </>
  );
}

export default App;
