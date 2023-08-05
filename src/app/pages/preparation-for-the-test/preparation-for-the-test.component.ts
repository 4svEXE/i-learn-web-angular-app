import { Component } from "@angular/core";
import { Technologies } from "src/app/db/Tecnologies";
import { TechnologiesService } from "./../../shared/services/technologies.service";
import { RecomendetFractionsTechnologies } from "./../../db/RecomendetFractionsTechnologies";
import { UserService } from "./../../shared/services/user.service";
import { AllTechnologies } from "./../../db/AllTecnologies";

@Component({
  selector: "app-preparation-for-the-test",
  templateUrl: "./preparation-for-the-test.component.html",
  styleUrls: ["./preparation-for-the-test.component.scss"],
})
export class PreparationForTheTestComponent {
  readonly IMG_PATH: string = "";

  isRecomendetButtonActive = true;

  technologies = Technologies; // All tecnologies as a entitys
  allTech = AllTechnologies; // All tecnologies as a list

  techToRender = this.technologies;

  recomendetTech = RecomendetFractionsTechnologies; // recomendet Tech  as a list
  sortedTechnologies!: string[]; // sorted tech list
  selectedTech!: string[]; //  tech list from the local storage

  userFraction!: string;

  constructor(
    private techService: TechnologiesService,
    private userService: UserService
  ) {
    this.selectedTech = this.techService.getSelectedTech();

    // Set user fraction
    this.userFraction = userService.getFraction();

    // Set tech
    this.renderListOfTech("Saved");
  }

  renderListOfTech(tech: string) {
    // if (tech === "Saved") {
    //   if (this.techService.getSelectedTech().length !== 0) {
    //     this.techToRender = this.techService.getTechAsEntitys(
    //       this.selectedTech
    //     );
    //   } else {
    //     this.renderListOfTech("Recomendet");
    //   }
    // }
    if (tech === "Recomendet") {
      this.sortedTechnologies = this.techService.getRecomendetTechByTitle(this.userFraction);

      console.log('this.sortedTechnologies :>> ', this.sortedTechnologies);

      this.techToRender = this.techService.getTechAsEntitys(
        this.sortedTechnologies
      );

      this.isRecomendetButtonActive = true;
    }
    if (tech === "All") {
      this.techToRender = this.technologies;
      this.isRecomendetButtonActive = false;
    }
  }

  checkIsSelectedTech(tech: string) {
    for (let i = 0; i < this.selectedTech.length; i++) {
      if (this.selectedTech[i] === tech) return true;
    }

    return false;
  }
}
