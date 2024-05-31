import { FC, useContext } from 'react'
import { classNames } from '../../../utils/classNames'

import { TestChoice } from '../../testAnswer'
import { QuestionsContext } from '../../../providers/questionsContext'
import "./testQuestion.css"

interface TestQuestionProps {
    className?: string,

    handleAnswerChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TestQuestion: FC<TestQuestionProps> = ({ handleAnswerChange, className = "" }) => {
    const data = useContext(QuestionsContext);
    //todo refactor this
    const question = data.data.data[data.currentQuestion].data.question;

    return <div className={classNames("test-question", {}, [className])}>
        <p>{question}</p>
        <TestChoice handler={handleAnswerChange} />
    </div>
}
