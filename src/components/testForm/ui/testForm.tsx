import React, { useContext, useState, useEffect } from 'react';
import { classNames } from '../../../utils/classNames';

import { TestQuestion } from '../../testQuestion/';
import { QuestionsContext } from '../../../providers/questionsContext';

interface TestFormProps {
    className?: string;
}

export const TestForm: React.FC<TestFormProps> = ({ className = "" }) => {
    const [isStarted, setIsStarted] = useState(false);
    const state = useContext(QuestionsContext);
    const [answer, setAnswer] = useState("");
    //todo number check and correct data
    const startTime = new Date().getTime()
    const timeLimit = Number(state.data.time) * 60
    const [timeLeft, setTimeLeft] = useState(timeLimit); // 15 минут в секундах

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (state.data.data.length - 1 === state.currentQuestion) {
            alert(`Вы выбрали ответ: ${answer}` + "Вопросы закончились");
            setIsStarted(false);
        } else {
            state.setCurrentQuestion(state.currentQuestion + 1);
            alert(`Вы выбрали ответ: ${answer}`);
        }
    };

    const handleStartTest = () => {
        setIsStarted(true);
    };

    useEffect(() => {
        if (isStarted) {
            const timer = setInterval(() => {
                const timeNow = new Date().getTime();
                setTimeLeft(() => {
                    return timeLimit - Math.round((timeNow - startTime) / 1000);
                });
            }, 1000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [isStarted]);

    useEffect(() => {
        if (timeLeft === 0) {
            //todo add correct test finish
            alert("Тест закончен");
            setIsStarted(false);
        }
    }, [timeLeft]);

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    return (
        <>
            {!isStarted && (
                <div>
                    <h2>Описание теста</h2>
                    <p>Вот описание теста, которое вы можете добавить.</p>
                    <button onClick={handleStartTest}>Начать тест</button>
                </div>
            )}
            {isStarted && (
                <div>
                    <p>Осталось времени: {formatTime(timeLeft)}</p>
                    <form className={classNames("", {}, [className])} onSubmit={handleSubmit}>
                        <h1>Тест "название"</h1>
                        <h2>Вопрос {state.currentQuestion + 1}</h2>
                        <TestQuestion handleAnswerChange={handleAnswerChange} />
                        <button type="submit">Ответить</button>
                    </form>
                </div>
            )}
        </>
    );
};