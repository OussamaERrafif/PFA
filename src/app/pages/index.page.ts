import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { AccountComponent } from './Profile/Account';
import { SecurityComponent } from './Profile/Security';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <app-account></app-account>
    <app-security></app-security>

  `,
    imports: [NgIf , AccountComponent, SecurityComponent]})
export default class HomeComponent {
  
}
