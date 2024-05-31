import { useState } from 'react';
import './App.css';
import { TestForm } from './components/testForm/';
import { QuestionsProvider } from './providers/questionsContext';
import { TestDescription } from './components/testDescription';
import { TestFinish } from './components/testFinish';

function App() {

  const [isStarted, setIsStarted] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const handleStartTest = () => {
    setIsStarted(true);
  };

  return (
    <>
      <QuestionsProvider>
        {!isStarted && !isTestFinished && <TestDescription handler={handleStartTest} />}
        {isStarted && !isTestFinished && <TestForm isStarted={isStarted} setIsStarted={setIsStarted} setIsTestFinished={setIsTestFinished} />}
        {isTestFinished && <TestFinish />}
      </QuestionsProvider>
    </>
  );
}

export default App;
