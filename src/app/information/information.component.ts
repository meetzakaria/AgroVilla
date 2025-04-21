import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  imports: [CommonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  infoCards = [
    {
      title: 'Farming Guides',
      desc: 'Step-by-step crop growing techniques for local seasons.',
      icon: 'info/guide.png'
    },
    {
      title: 'Weather Forecasts',
      desc: 'Live updates on rain, temperature, and humidity.',
      icon: 'info/weather.jpg'
    },
    {
      title: 'Market Prices',
      desc: 'Track daily price changes of crops across regions.',
      icon: 'info/price.jpg'
    },
    {
      title: 'Pest & Disease Info',
      desc: 'How to prevent & treat common crop diseases.',
      icon: 'info/pest.jpg'
    },
    {
      title: 'Govt. Schemes',
      desc: 'Find subsidy and loan programs by the government.',
      icon: 'info/govt.jpg'
    },
    {
      title: 'Agri News',
      desc: 'Stay informed with recent news & innovations in agriculture.',
      icon: 'info/news.jpg'
    }
  ];
}
