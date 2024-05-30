import { FC, useContext } from 'react'
import { classNames } from '../../../utils/classNames'
import { QuestionsContext } from '../../../providers/questionsContext';


interface TestFinishProps {
    className?: string
}

export const TestFinish: FC<TestFinishProps> = ({ className = "" }) => {
    const state = useContext(QuestionsContext);
    return <div className={classNames("", {}, [className])}>
        {state.userAnswers.length !== 0 ? state.userAnswers.map((userAnswer) => <p key={userAnswer.question}>{userAnswer.question} - {userAnswer.answer}</p>) : "Тест завершен"}
    </div>
}
