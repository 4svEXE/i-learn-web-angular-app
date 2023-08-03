import { Component } from "@angular/core";
import { UserService } from "src/app/shared/services/user.service";
import { UserInterface } from "./../../interfaces/";
import { User, UserAvatars } from "src/app/db";
import { SelectFractionService } from "src/app/shared/services/select-fraction.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class AccountComponent {
  readonly IMG_AVATARS_PATH = "assets/images/pages/account/avatars/";

  user: UserInterface = User;
  userAvatars: string[] = UserAvatars;

  isOpenAvatarsBox = false;

  constructor(
    private userService: UserService,
    private selectFractionService: SelectFractionService
  ) {
    this.user.name = this.userService.getName();
    this.user.avatar = this.userService.getAvatar();
    this.user.dateOfLogin = this.userService.getDateOfLogin();
    this.user.selectedTechnologies = this.userService.getSelectedTechnologies();

    this.userService.userFraction$.subscribe((fraction: any) => {
      this.user.fraction = fraction;
    });

    this.userService.setFraction(this.userService.getFraction());
  }

  resetUserFraction() {
    this.selectFractionService.setIsActiveFractionBox(true);
  }

  changeAvatar(avatar: string) {
    this.userService.setAvatar(avatar);
    this.user.avatar = this.userService.getAvatar();
  }

  setUserName(name: string) {
    if (name.length !== 0) {
      this.userService.setName(name);
      this.user.name = this.userService.getName();
    }
  }
}
