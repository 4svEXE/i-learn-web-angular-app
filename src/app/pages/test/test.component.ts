import { Component } from "@angular/core";
import { Questions } from "./../../db/Questions";
import { QuestionInterface, AnswerInterface } from "src/app/interfaces";
import { UserService } from "./../../shared/services/user.service";
import { SettingsService } from "src/app/shared/services/settings.service";
import { TestsFilterService } from "src/app/shared/services/tests-filter.service";
import { QuestionsService } from "src/app/shared/services/questions.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent {
  config = {
    selectedTech: [""],
    quantityQuestions: 20,
    difficultyLevel: "junior",
  };

  questions: QuestionInterface[] = Questions;
  filteredQuestions!: any[];

  currentQuestion: number = 0;
  questionResults!: QuestionResultInterface[];

  currentUserAnswer!: QuestionResultInterface;

  constructor(
    private userService: UserService,
    private settingsService: SettingsService,
    private testsFilterService: TestsFilterService,
    private questionsService: QuestionsService
  ) {
    this.config.selectedTech = userService.getSelectedTechnologies();
    this.config.quantityQuestions = settingsService.getQuantityOfQuestions();
    this.config.difficultyLevel = settingsService.getDifficultyLevel();

    this.filteredQuestions = testsFilterService.filterAllQuestions(
      this.questions,
      this.config
    );

    // this.setEmptyQuestion()
  }

  randomizeAnswers(answers: AnswerInterface[]): AnswerInterface[] {
    console.log('answers :>> ', answers);
    return answers.sort((a, b) => Math.random() - 0.5);
  }

  saveTestResults() {}

  setAnswer(id: string, title: string, isCorrect: boolean) {
    // let selectedQuestion = this.questionsService.getQuestion(id)

    this.currentUserAnswer.questionID = id;
    this.currentUserAnswer.userAnswer.title = title;
    this.currentUserAnswer.userAnswer.isCorrect = isCorrect;
  }

  saveQuestionResult() {
    this.questionResults.push(this.currentUserAnswer);
  }

  answerIsCorrect(answers: QuestionResultInterface): boolean {
    return answers?.userAnswer?.isCorrect || false;
  }

  setEmptyQuestion(){
    // this.currentUserAnswer = JSON.parse(
    //   JSON.stringify(emptyAnswer)
    // );
  }

  nextQuestion() {
    if (this.currentQuestion === this.config.quantityQuestions - 1) {
      return this.saveTestResults();
    }

    this.currentQuestion++;
    // this.saveQuestionResult();
    // this.setEmptyQuestion()
  }
}

interface QuestionResultInterface {
  questionID: string;
  userAnswer: AnswerInterface;
}

const emptyAnswer = {
  questionID: "0",
  userAnswer: {
    title: "string",
    isCorrect: false,
  },
};
