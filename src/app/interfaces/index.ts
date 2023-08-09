export interface UserInterface {
  name: string;
  fraction: string;
  avatar: string;
  dateOfLogin: string;
  combo: number;
  selectedTechnologies: string[];
}

export interface QuestionInterface {
  id: string,
  title: string,
  answers: AnswerInterface[],
  technology: string,
  level: string,
  image: string,
}

export interface AnswerInterface {
  title: string,
  isCorrect: boolean
}