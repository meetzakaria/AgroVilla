import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-information',
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  infoCards = [
    {
      title: 'Farming Guides',
      desc: 'Step-by-step crop growing techniques for local seasons.',
      icon: 'info/guide.png',
      path:'/seeds'
    },
    {
      title: 'Weather Forecasts',
      desc: 'Live updates on rain, temperature, and humidity.',
      icon: 'info/weather.jpg',
      path:'/weather'
    },
    {
      title: 'Market Prices',
      desc: 'Track daily price changes of crops across regions.',
      icon: 'info/price.jpg',
      path:'/seeds'
    },
    {
      title: 'Pest & Disease Info',
      desc: 'How to prevent & treat common crop diseases.',
      icon: 'info/pest.jpg',
      path:'/seeds'
    },
    {
      title: 'Govt. Schemes',
      desc: 'Find subsidy and loan programs by the government.',
      icon: 'info/govt.jpg',
      path:'/seeds'
    },
    {
      title: 'Agri News',
      desc: 'Stay informed with recent news & innovations in agriculture.',
      icon: 'info/news.jpg',
      path:'/seeds'
    }
  ];
item: any;
}