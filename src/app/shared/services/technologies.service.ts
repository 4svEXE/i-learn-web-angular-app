import { Injectable } from "@angular/core";
import { Technologies } from "src/app/db/Tecnologies";

@Injectable({
  providedIn: "root",
})
export class TechnologiesService {
  private selectedTechnologies!: string[];

  private techEntitys = Technologies;

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

  deleteSelectedTech(tech: string) {
    this.selectedTechnologies.push(tech);

    
    this.setSelectedTech(this.getSelectedTech());
  }

  getTechAsEntitys(techList: string[]): any[] {
    let resultTechEntitys: any[] = [];

    this.techEntitys.forEach((techEntity) => {
      here: for (let i = 0; i < techList.length; i++) {
        if (techEntity.title === techList[i]) {
          resultTechEntitys.push(techEntity);
          break here;
        }
      }
    });

    return resultTechEntitys;
  }
}
