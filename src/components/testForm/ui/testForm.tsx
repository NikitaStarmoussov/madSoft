import React, { useState } from 'react';
import { classNames } from '../../../utils/classNames';
import { testMockData } from '../../../data/test-mock.data';

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
            <p>{question}</p>
            <ul>
                {testMockData.data[0].data.choices.map((choice) => (
                    <li key={choice}>
                        <input type="radio" name="answer" value={choice} onChange={handleAnswerChange} />
                        <label htmlFor="answer1">{choice}</label>
                    </li>
                ))}
            </ul>
            <button type="submit">Ответить</button>
        </form>
    );
};

