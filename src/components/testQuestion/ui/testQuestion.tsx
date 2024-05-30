import { FC } from 'react'
import { classNames } from '../../../utils/classNames'
import { testMockData } from '../../../data/test-mock.data'
import { TestChoice } from '../../testChoice'


interface TestQuestionProps {
    className?: string,
    question: string,
    handleAnswerChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TestQuestion: FC<TestQuestionProps> = ({ question, handleAnswerChange, className = "" }) => {
    return <div className={classNames("", {}, [className])}>
        <p>{question}</p>
        <ul>
            {testMockData.data[0].data.choices.map((choice) => (
                <TestChoice key={choice} type={testMockData.data[0].type} choice={choice} handler={handleAnswerChange} />
            ))}
        </ul>
    </div>
}
