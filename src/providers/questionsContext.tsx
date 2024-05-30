import React, { FC, createContext } from 'react';
import { testMockData } from '../data/test-mock.data';
import { testData } from '../types/tests.types';

type QuestionContextType = {
    currentQuestion: number,
    data: testData
}
//todo add redux store
export const QuestionsContext = createContext<QuestionContextType>({
    currentQuestion: 0,
    data: testMockData,
});

export const QuestionsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {


    return (
        <QuestionsContext.Provider value={{ currentQuestion: 0, data: testMockData }}>
            {children}
        </QuestionsContext.Provider>
    );
};