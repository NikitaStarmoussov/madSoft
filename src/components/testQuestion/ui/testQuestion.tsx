import { FC } from 'react'
import { classNames } from '../../../utils/classNames'
import { testMockData } from '../../../data/test-mock.data'
import { TestChoice } from '../../testAnswer'


interface TestQuestionProps {
    className?: string,
    question: string,
    handleAnswerChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TestQuestion: FC<TestQuestionProps> = ({ handleAnswerChange, className = "" }) => {
    const data = testMockData.data[0].data;
    return <div className={classNames("", {}, [className])}>
        <p>{data.question}</p>
        <ul>
            {
                <TestChoice handler={handleAnswerChange} />
            }
        </ul>
    </div>
}
