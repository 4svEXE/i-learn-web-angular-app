import { Component } from "@angular/core";
import { UserService } from "src/app/shared/services/user.service";
import { UserInterface } from './../../interfaces/index';
import { User } from "src/app/db";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  readonly IMG_AVATARS_PATH = "assets/images/pages/account/avatars/";

  user: UserInterface = User;

  constructor(private userService: UserService) {
    this.user.name = this.userService.getName();
    this.user.avatar = this.userService.getAvatar();
    this.user.combo = this.userService.getCombo();
    // this.user.faction = this.userService.getFaction();
    // this.user.dateOfLogin = this.userService.getDateOfLogin();
    // this.user.selectedTechnologies = this.userService.getSelectedTechnologies();
  }
}
