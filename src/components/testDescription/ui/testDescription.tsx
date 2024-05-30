import { FC } from 'react'
import { classNames } from '../../../utils/classNames'


interface TestDescriptionProps {
  className?: string,
  handler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const TestDescription: FC<TestDescriptionProps> = ({ className = "", handler }) => {
  return <div className={classNames("", {}, [className])}>
    <h2>Описание теста</h2>
    <p>Вот описание теста, которое вы можете добавить.</p>
    <button onClick={handler}>Начать тест</button>
  </div>
}
