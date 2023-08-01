import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  private quantityOfQuestions!: number;
  private difficultyLevel!: string;

  constructor() {
    this.setQuantityOfQuestions(this.getQuantityOfQuestions());

    this.setDifficultyLevel(this.getDifficultyLevel());
  }

  setQuantityOfQuestions(quantity: number): void {
    localStorage.setItem("quantityOfQuestions", JSON.stringify(quantity));
  }

  getQuantityOfQuestions(): number {
    const quantity = localStorage.getItem("quantityOfQuestions");
    if (quantity !== null) return parseInt(quantity);
    return 20;
  }

  // Difficulty level

  setDifficultyLevel(level: string): void {
    this.difficultyLevel = this.getDifficultyLevel();
    localStorage.setItem("difficultyLevel", level);
  }

  getDifficultyLevel() {
    return localStorage.getItem("difficultyLevel") || "junior";
  }
}
