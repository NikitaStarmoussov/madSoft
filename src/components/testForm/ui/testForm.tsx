import React, { useContext, useState } from 'react';
import { classNames } from '../../../utils/classNames';

import { TestQuestion } from '../../testQuestion/';
import { QuestionsContext } from '../../../providers/questionsContext';


interface TestFormProps {
    className?: string;
}

export const TestForm: React.FC<TestFormProps> = ({ className = "" }) => {

    const [answer, setAnswer] = useState("");
    const state = useContext(QuestionsContext);
    // const { currentQuestion, setCurrentQuestion } = data;

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        state.setCurrentQuestion(state.currentQuestion + 1);
        alert(`Вы выбрали ответ: ${answer}`);
    };

    return (
        <form className={classNames("", {}, [className])} onSubmit={handleSubmit}>
            <h1>Test</h1>
            <h2>Вопрос {state.currentQuestion + 1}</h2>
            <TestQuestion handleAnswerChange={handleAnswerChange} />
            <button type="submit">Ответить</button>
        </form>
    );
};

