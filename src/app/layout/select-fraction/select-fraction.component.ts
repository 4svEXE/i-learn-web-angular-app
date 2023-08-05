import { Component, HostListener } from "@angular/core";
import { WebFractions } from "src/app/db";
import { RecomendetFractionsTechnologies } from "src/app/db/RecomendetFractionsTechnologies";
import { SelectFractionService } from "src/app/shared/services/select-fraction.service";
import { TechnologiesService } from "src/app/shared/services/technologies.service";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-select-fraction",
  templateUrl: "./select-fraction.component.html",
  styleUrls: ["./select-fraction.component.scss"],
})
export class SelectFractionComponent {
  readonly IMG_PATH: string = "assets/images/pages/fractions/";
  recomendetTech = RecomendetFractionsTechnologies;

  currentScreenWidth!: number;
  currentScreenHeight!: number;
  isActiveSettings: boolean = false;

  userFraction!: string;
  isActiveSelectFraction = false;
  readonly webFractions = WebFractions;

  constructor(
    private userService: UserService,
    private selectFractionService: SelectFractionService,
    private techService: TechnologiesService
  ) {
    this.selectFractionService.data$.subscribe((isActive: boolean) => {
      this.isActiveSelectFraction = isActive;
    });

    this.userService.userFraction$.subscribe((fraction: string) => {
      this.userFraction = fraction;

      if (!this.userFraction) {
        this.selectFractionService.setIsActiveFractionBox(true);
      }
    });

    this.userService.setFraction(this.userService.getFraction());
    this.getScreen();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.getScreen();
  }

  getScreen() {
    this.currentScreenWidth = window.innerWidth;
    this.currentScreenHeight = window.innerHeight;
  }

  setFraction(fraction: string) {
    this.userService.setFraction(fraction);
    this.userFraction = fraction;
    this.selectFractionService.setIsActiveFractionBox(false);

    // Set rec techs to ls
    let recomendet = this.techService.getRecomendetTechByTitle(fraction);
    this.techService.setSelectedTech(recomendet);
  }
}
