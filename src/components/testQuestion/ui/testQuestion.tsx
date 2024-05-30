import { FC, useContext } from 'react'
import { classNames } from '../../../utils/classNames'

import { TestChoice } from '../../testAnswer'
import { QuestionsContext } from '../../../providers/questionsContext'


interface TestQuestionProps {
    className?: string,

    handleAnswerChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TestQuestion: FC<TestQuestionProps> = ({ handleAnswerChange, className = "" }) => {
    const data = useContext(QuestionsContext);
    //todo refactor this
    const question = data.data.data[data.currentQuestion].data.question;

    return <div className={classNames("", {}, [className])}>
        <p>{question}</p>
        <ul>
            {
                <TestChoice handler={handleAnswerChange} />
            }
        </ul>
    </div>
}
