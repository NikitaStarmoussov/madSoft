export enum questionTypes { oneChoiceAnswer = "one choice", multipleChoiceAnswer = "multiple choice", shortTextAnswer = "short text choice", longTextAnswer = "long text choice" }

export type question = {
    type: questionTypes.oneChoiceAnswer | questionTypes.multipleChoiceAnswer,
    data: {
        question: string,
        choices: string[],
    }

} | {
    type: questionTypes.shortTextAnswer | questionTypes.longTextAnswer,
    data: {
        question: string,
        choices: null,
    }
}

export type testData = {
    time: string,
    data: question[],
}