import { FC, useContext } from 'react'
import { classNames } from '../../../utils/classNames'
import { QuestionsContext } from '../../../providers/questionsContext';
import './testDescription.css'

interface TestDescriptionProps {
  className?: string,
  handler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const TestDescription: FC<TestDescriptionProps> = ({ className = "", handler }) => {
  const data = useContext(QuestionsContext);
  return <div className={classNames("test-description", {}, [className])}>
    <h2>Описание теста</h2>
    {data.data.time && <p>Время теста: {data.data.time} минут</p>}
    <p>Вот описание теста, которое вы можете добавить.</p>
    <button onClick={handler}>Начать тест</button>
  </div>
}
