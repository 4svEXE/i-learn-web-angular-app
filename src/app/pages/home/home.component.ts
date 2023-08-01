import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  routes = [
    {path: '/preperations', title: 'test' },
    {path: '/account', title: 'account' },
    {path: '/settings', title: 'settings' },

    {path: '/home', title: 'about' },
    {path: '/home', title: 'help' },
  ]
}
