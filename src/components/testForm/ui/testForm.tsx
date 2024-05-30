import React, { useState } from 'react';
import { classNames } from '../../../utils/classNames';
import { testMockData } from '../../../data/test-mock.data';
import { TestQuestion } from '../../testQuestion/';


interface TestFormProps {
    className?: string;
}

export const TestForm: React.FC<TestFormProps> = ({ className = "" }) => {
    const [question] = useState(testMockData.data[0].data.question);
    const [answer, setAnswer] = useState("");

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Вы выбрали ответ: ${answer}`);
    };

    return (
        <form className={classNames("", {}, [className])} onSubmit={handleSubmit}>
            <h1>Test</h1>
            <TestQuestion question={question} handleAnswerChange={handleAnswerChange} />
            <button type="submit">Ответить</button>
        </form>
    );
};

