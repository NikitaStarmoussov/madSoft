import { FC, useContext } from 'react'
import { classNames } from '../../../utils/classNames'
import { QuestionsContext } from '../../../providers/questionsContext';
import "./testProgress.css"


interface TestProgressProps {
    className?: string
}

export const TestProgress: FC<TestProgressProps> = ({ className = "" }) => {
    const state = useContext(QuestionsContext);
    const currentQuestion = state.currentQuestion;
    const totalQuestions = state.data.data.length;
    // <h2>Вопрос {state.currentQuestion + 1}</h2>
    // return <div className={classNames("", {}, [className])}>{currentQuestion}{totalQuestions}</div>
    return <ul>
        {state.data.data.map((data, index) => <li key={data.type} className={classNames("", { active: currentQuestion >= index },)}>{currentQuestion}/{totalQuestions}</li>)
        }
    </ul >
}
