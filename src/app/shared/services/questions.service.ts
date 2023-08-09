import { Injectable } from "@angular/core";
import { Questions } from "src/app/db/Questions";
import {
  QuestionResultInterface,
  QuestionInterface,
  AnswerInterface,
} from "src/app/interfaces";

@Injectable({
  providedIn: "root",
})
export class QuestionsService {
  questions: QuestionInterface[] = Questions;

  constructor() {}

  getQuestion(id: string) {
    return this.questions.filter((question) => {
      return question.id === id;
    })[0];
  }

  

  answerIsCorrect(answers: QuestionResultInterface): boolean {
    return answers?.userAnswer?.isCorrect || false;
  }

  getEmptyQuestion() {
    return JSON.parse(JSON.stringify(emptyAnswer));
  }

  nextQuestionHandler(currentQuestion: number, config: any): boolean {
    if (currentQuestion === config.quantityQuestions - 1) {
      return false;
    }

    return true;
  }
}

const emptyAnswer = {
  questionID: "0",
  userAnswer: {
    title: "string",
    isCorrect: false,
  },
};
