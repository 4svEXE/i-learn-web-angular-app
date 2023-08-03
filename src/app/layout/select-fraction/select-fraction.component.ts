import { Component, HostListener } from "@angular/core";
import { WebFractions } from "src/app/db";
import { SelectFractionService } from "src/app/shared/services/select-fraction.service";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-select-fraction",
  templateUrl: "./select-fraction.component.html",
  styleUrls: ["./select-fraction.component.scss"],
})
export class SelectFractionComponent {
  readonly IMG_PATH: string = "assets/images/pages/fractions/";

  currentScreenWidth!: number;
  currentScreenHeight!: number;

  userFraction!: string;
  isActiveSettings: boolean = false;
  isActiveSelectFraction: boolean = false;
  webFractions = WebFractions;

  constructor(
    private userService: UserService,
    private selectFractionService: SelectFractionService
  ) {
    // this.userFraction = this.userService.getFraction();

    this.selectFractionService.data$.subscribe((isActive: boolean) => {
      this.isActiveSettings = isActive;
    });

    this.userService.data$.subscribe((fraction: any) => {
      this.userFraction = fraction;
    });
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    // console.log('event :>> ', event);
    // Отримуємо ширину та висоту екрану і зберігаємо їх у змінних
    this.currentScreenWidth = window.innerWidth;
    this.currentScreenHeight = window.innerHeight;

    
  }

  ngOnInit() {
    console.log('this.userFraction :>> ', this.userFraction);
    if (!this.userFraction){
      if (this.userFraction.length === 0) {
        // this.isActiveSelectFraction = true;
        this.selectFractionService.sendFractionData(true)
      }
    }
    

    this.currentScreenWidth = window.innerWidth;
    this.currentScreenHeight = window.innerHeight;
    console.log('object :>> ', this.currentScreenWidth);
  }

  setFraction(fraction: string) {
    this.userService.setFraction(fraction);
    this.userFraction = fraction;
    // this.isActiveSelectFraction = false;
    this.selectFractionService.sendFractionData(false)
  }
}
