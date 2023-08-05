import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TechnologiesService {
  private selectedTechnologies!: string[];

  constructor() {
    this.setSelectedTech(this.getSelectedTech());
  }

  getSelectedTech(): string[] {
    const selectedTechnologies =
      localStorage.getItem("selectedTechnologies") || "[]";

    return JSON.parse(selectedTechnologies);
  }

  setSelectedTech(technologies: string[]) {
    this.selectedTechnologies = technologies;
    const strTech = JSON.stringify(this.selectedTechnologies);
    localStorage.setItem("selectedTechnologies", strTech);
  }

  // push one item to arr
  pushSelectedTech(tech: string) {
    this.selectedTechnologies.push(tech);
    this.setSelectedTech(this.getSelectedTech());
  }
}
