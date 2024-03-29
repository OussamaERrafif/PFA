import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { AccountComponent } from './Profile/Account';
import { SecurityComponent } from './Profile/Security';
import { PlanAndBillingsComponent } from './Profile/planandbilings';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <app-account></app-account>
    <app-security></app-security>
    <app-plan-and-billings></app-plan-and-billings>

  `,
    imports: [NgIf , AccountComponent, SecurityComponent,PlanAndBillingsComponent]})
export default class HomeComponent {
  
}
