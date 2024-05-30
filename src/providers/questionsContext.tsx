import React, { FC, createContext, useState } from 'react';
import { testMockData } from '../data/test-mock.data';
import { testData } from '../types/tests.types';

type QuestionContextType = {
    currentQuestion: number,
    setCurrentQuestion: (currentQuestion: number) => void
    data: testData
}
//todo add redux store
export const QuestionsContext = createContext<QuestionContextType>({
    currentQuestion: 0,
    setCurrentQuestion: () => { },
    data: testMockData
});

export const QuestionsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
        <QuestionsContext.Provider value={{ currentQuestion: currentQuestion, setCurrentQuestion: setCurrentQuestion, data: testMockData }}>
            {children}
        </QuestionsContext.Provider>
    );
};