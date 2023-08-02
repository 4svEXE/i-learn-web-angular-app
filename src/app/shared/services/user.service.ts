import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  // Значення за замовчуванням для полів користувача
  private readonly DEFAULT_NAME = "User Name";
  private readonly DEFAULT_FACTION = "Frontend";
  private readonly DEFAULT_AVATAR = "1";
  private readonly DEFAULT_DATE_OF_LOGIN = new Date().toLocaleString();
  private readonly DEFAULT_COMBO = 1;
  private readonly DEFAULT_SELECTED_TECHNOLOGIES: string[] = [];

  // Приватні поля для зберігання даних користувача
  private name!: string;
  private faction!: string;
  private avatar!: string;
  private dateOfLogin!: string;
  private combo!: number;
  private selectedTechnologies!: string[];

  constructor() {
    // Виклик методів set для встановлення значень при створенні об'єкту UserService
    this.setName(this.getName());
    this.setFaction(this.getFaction());
    this.setAvatar(this.getAvatar());
    this.setDateOfLogin(this.getDateOfLogin());
    this.setCombo(this.getCombo());
    this.setSelectedTechnologies(this.getSelectedTechnologies());
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

  // Метод для встановлення фракції користувача
  setFaction(faction: string): void {
    this.faction = faction || this.DEFAULT_FACTION;
    localStorage.setItem("userFaction", this.faction);
  }

  // Метод для отримання фракції користувача з локального сховища
  getFaction(): string {
    return localStorage.getItem("userFaction") || this.DEFAULT_FACTION;
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
      "userTechnologies",
      JSON.stringify(this.selectedTechnologies)
    );
  }

  // Метод для отримання обраних технологій користувача з локального сховища
  getSelectedTechnologies(): string[] {
    const technologiesJson = localStorage.getItem("userTechnologies");
    return technologiesJson
      ? JSON.parse(technologiesJson)
      : this.DEFAULT_SELECTED_TECHNOLOGIES;
  }
}
