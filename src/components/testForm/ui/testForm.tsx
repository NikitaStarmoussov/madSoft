import React, { useContext, useState } from 'react';
import { classNames } from '../../../utils/classNames';
import "./testForm.css"
import { TestQuestion } from '../../testQuestion/';
import { QuestionsContext } from '../../../providers/questionsContext';
import { TestTimer } from '../../testTimer';
import { TestFinish } from '../../testFinish';
import { TestProgress } from '../../testProgress';

interface TestFormProps {
    className?: string;
    isStarted: boolean;
    setIsStarted: (isStarted: boolean) => void;
    setIsTestFinished: (isTestFinished: boolean) => void;
}

export const TestForm: React.FC<TestFormProps> = ({ className = "", isStarted, setIsStarted, setIsTestFinished }) => {

    const state = useContext(QuestionsContext);
    const [answer, setAnswer] = useState("");
    //todo number check and correct data
    // 15 минут в секундах

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //todo add correct save  and diff logic
        setAnswer(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const question = state.data.data[state.currentQuestion].data.question
        event.preventDefault();
        state.setUserAnswers([...state.userAnswers, { question: question, answer: answer }]);
        if (state.data.data.length - 1 === state.currentQuestion) {
            setIsTestFinished(true);
            setIsStarted(false);
        } else {
            state.setCurrentQuestion(state.currentQuestion + 1);
        }
    };





    return (
        <>
            <form className={classNames("test-form", {}, [className])} onSubmit={handleSubmit}>
                <header className='test-form__header'>
                    <h1>Тестирование</h1>
                    <TestTimer isStarted={isStarted} setIsStarted={setIsStarted} />
                </header>
                <TestProgress/>
                <TestQuestion handleAnswerChange={handleAnswerChange} />
                <button type="submit">Ответить</button>
            </form>
        </>
    );
};