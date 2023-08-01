import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  private currentLanguage!: string;

  constructor() {
    this.setLanguage(this.getCurrentLanguage());
  }

  setLanguage(language: string): void {
    this.currentLanguage = this.getCurrentLanguage();

    localStorage.setItem("language", language);
  }

  getCurrentLanguage() {
    return localStorage.getItem("language") || "en-US";
  }
}
