import { Component } from "@angular/core";
import { Technologies } from "src/app/db/Tecnologies";
import { TechnologiesService } from "./../../shared/services/technologies.service";
import { RecomendetFractionsTechnologies } from "./../../db/RecomendetFractionsTechnologies";
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: "app-preparation-for-the-test",
  templateUrl: "./preparation-for-the-test.component.html",
  styleUrls: ["./preparation-for-the-test.component.scss"],
})
export class PreparationForTheTestComponent {
  readonly IMG_PATH: string = "";

  technologies = Technologies;
  sortedTechnologies!: string[];

  selectedTech!: string[]; // from local storage
  recomendetTech = RecomendetFractionsTechnologies;

  userFraction!: string;

  constructor(private techService: TechnologiesService, private userService: UserService) {
    this.selectedTech = this.techService.getSelectedTech();

    // Set user fraction
    this.userFraction = userService.getFraction()

    // Set tech
    this.sortedTechnologies = this.recomendetTech[this.userFraction];
  }

  renderListOfTec(tech: string) {
    if (tech === "Recomendet") {

    }
    if (tech === "All") {
      this.sortedTechnologies = this.technologies
    }
  }
}
