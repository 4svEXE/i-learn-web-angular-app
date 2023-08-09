import { Injectable } from '@angular/core';
import { Questions } from 'src/app/db/Questions';
import { QuestionInterface, AnswerInterface } from "src/app/interfaces";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: QuestionInterface[] = Questions;

  constructor() { }

  getQuestion(id: string) {
    return this.questions.filter((question)=>{
      return question.id === id
    })[0]
  }
}
