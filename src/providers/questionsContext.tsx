import React, { FC, createContext, useState } from 'react';
import { testMockData } from '../data/test-mock.data';
import { testData } from '../types/tests.types';

type QuestionContextType = {
    currentQuestion: number,
    setCurrentQuestion: (currentQuestion: number) => void,
    data: testData,
    userAnswers: Record<string, string>[],
    setUserAnswers: React.Dispatch<React.SetStateAction<Record<string, string>[]>>
}
//todo add redux store
export const QuestionsContext = createContext<QuestionContextType>({
    currentQuestion: 0,
    setCurrentQuestion: () => { },
    data: testMockData,
    userAnswers: [],
    setUserAnswers: () => { }
});

export const QuestionsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Record<string, string>[]>([]);

    return (
        <QuestionsContext.Provider value={{ currentQuestion: currentQuestion, setCurrentQuestion: setCurrentQuestion, data: testMockData, userAnswers: userAnswers, setUserAnswers: setUserAnswers }}>
            {children}
        </QuestionsContext.Provider>
    );
};