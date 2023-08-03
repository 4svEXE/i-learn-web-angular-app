import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SelectFractionService {
  isActiveSelectFraction: boolean = false;

  // Обсервер для фракції
  private isActiveFractionSubject = new Subject<boolean>();
  data$ = this.isActiveFractionSubject.asObservable();

  sendFractionData(isActive: boolean) {
    this.isActiveFractionSubject.next(isActive);
  }
}
