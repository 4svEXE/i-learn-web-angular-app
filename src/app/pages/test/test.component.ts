import { Component } from "@angular/core";
import { Questions } from "./../../db/Questions";
import {
  QuestionResultInterface,
  QuestionInterface,
  AnswerInterface,
} from "src/app/interfaces";
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
  questionResults: QuestionResultInterface[] = [];


  randomizedAnswers!: AnswerInterface[];
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

    this.currentUserAnswer = this.questionsService.getEmptyQuestion();

    this.randomizedAnswers = this.getRandomizedAnswers();
  }

  isActiveProgressCircle(i: number){
    console.log('i :>> ', i, this.currentQuestion);
    return this.currentQuestion === i


  }

  getRandomizedAnswers(): AnswerInterface[] {
    let answers = this.filteredQuestions[this.currentQuestion].answers;
    return answers.sort(() => Math.random() - 0.5);
  }

  saveTestResults() {}

  setAnswer(title: string, isCorrect: boolean) {
    // let selectedQuestion = this.questionsService.getQuestion(id)

    this.currentUserAnswer.questionID = this.filteredQuestions[
      this.currentQuestion
    ].id;
    this.currentUserAnswer.userAnswer.title = title;
    this.currentUserAnswer.userAnswer.isCorrect = isCorrect;
  }

  saveAnswerToAnswers() {
    this.questionResults.push(this.currentUserAnswer);
  }

  nextQuestion() {
    const isEnd = this.questionsService.nextQuestionHandler(
      this.currentQuestion,
      this.config
    );

    this.saveAnswerToAnswers();

    this.currentQuestion++;

    this.currentUserAnswer = this.questionsService.getEmptyQuestion();

    this.randomizedAnswers = this.getRandomizedAnswers();

    // console.log('this.questionResults :>> ', this.questionResults);

    if (isEnd) this.saveTestResults();
  }
}
