import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  // Значення за замовчуванням для полів користувача
  private readonly DEFAULT_NAME = "User Name";
  private readonly DEFAULT_FRACTION = "";
  private readonly DEFAULT_AVATAR = "1";
  private readonly DEFAULT_DATE_OF_LOGIN = new Date().toLocaleString();
  private readonly DEFAULT_COMBO = 1;
  private readonly DEFAULT_SELECTED_TECHNOLOGIES: string[] = [];

  // Приватні поля для зберігання даних користувача
  private name!: string;
  private fraction: string = this.DEFAULT_FRACTION; // "Front-end" | "Back-end" | "Full-stack"| "Web Designer"| "DevOps" |
  private avatar!: string;
  private dateOfLogin!: string;
  private combo!: number;
  private selectedTechnologies!: string[];

  // Обсервер для фракції
  private fractionSubject = new Subject<string>();
  userFraction$ = this.fractionSubject.asObservable();

  setIsActiveFractionBox(fraction: string) {
    this.fractionSubject.next(fraction);
  }

  constructor() {
    // Виклик методів set для встановлення значень при створенні об'єкту UserService
    this.setName(this.getName());
    this.setFraction(this.getFraction());
    this.setAvatar(this.getAvatar());
    this.setDateOfLogin(this.getDateOfLogin());
    this.setCombo(this.getCombo());
    this.setSelectedTechnologies(this.getSelectedTechnologies());
  }

  // Метод для встановлення фракції користувача
  setFraction(fraction: string): void {
    this.fraction = fraction || this.getFraction();
    localStorage.setItem("userFraction", this.fraction);
    this.setIsActiveFractionBox(this.fraction);
  }

  // Метод для отримання фракції користувача з локального сховища
  getFraction(): string {
    return localStorage.getItem("userFraction") || this.DEFAULT_FRACTION;
  }

  // Метод для встановлення ім'я користувача
  setName(name: string): void {
    this.name = name || this.DEFAULT_NAME;
    localStorage.setItem("userName", this.name);
  }

  // Метод для отримання ім'я користувача з локального сховища
  getName(): string {
    return localStorage.getItem("userName") || this.DEFAULT_NAME;
  }

  // Метод для встановлення аватара користувача
  setAvatar(avatar: string): void {
    this.avatar = avatar || this.DEFAULT_AVATAR;
    localStorage.setItem("userAvatar", this.avatar);
  }

  // Метод для отримання аватара користувача з локального сховища
  getAvatar(): string {
    return localStorage.getItem("userAvatar") || this.DEFAULT_AVATAR;
  }

  // Метод для встановлення дати останнього входу користувача
  setDateOfLogin(date: string): void {
    this.dateOfLogin = date || this.DEFAULT_DATE_OF_LOGIN;
    localStorage.setItem("lastLogin", this.dateOfLogin);
  }

  // Метод для отримання дати останнього входу користувача з локального сховища
  getDateOfLogin(): string {
    return localStorage.getItem("lastLogin") || this.DEFAULT_DATE_OF_LOGIN;
  }

  // Метод для встановлення комбо користувача
  setCombo(combo: number): void {
    this.combo = combo || this.DEFAULT_COMBO;
    localStorage.setItem("userCombo", this.combo.toString());
  }

  // Метод для отримання комбо користувача з локального сховища
  getCombo(): number {
    return parseInt(
      localStorage.getItem("userCombo") || this.DEFAULT_COMBO.toString()
    );
  }

  // Метод для встановлення обраних технологій користувача
  setSelectedTechnologies(technologies: string[]): void {
    this.selectedTechnologies =
      technologies || this.DEFAULT_SELECTED_TECHNOLOGIES;
    localStorage.setItem(
      "selectedTechnologies",
      JSON.stringify(this.selectedTechnologies)
    );
  }

  // Метод для отримання обраних технологій користувача з локального сховища
  getSelectedTechnologies(): string[] {
    const technologiesJson = localStorage.getItem("selectedTechnologies");
    return technologiesJson
      ? JSON.parse(technologiesJson)
      : this.DEFAULT_SELECTED_TECHNOLOGIES;
  }
}
