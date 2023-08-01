import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  routes = [
    {path: '/home/preperations', title: 'test' },
    {path: '/home/account', title: 'account' },
    {path: '/home/settings', title: 'settings' },

    {path: '/home', title: 'about' },
    {path: '/home', title: 'help' },
  ]
}
