import './App.css';
import { TestForm } from './components/testForm/';
import { QuestionsProvider } from './providers/questionsContext';

function App() {


  return (
    <>
      <QuestionsProvider>
        <TestForm />
      </QuestionsProvider>
    </>
  );
}

export default App;
