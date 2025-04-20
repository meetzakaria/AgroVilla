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
      icon: 'assets/icons/farming-guide.png'
    },
    {
      title: 'Weather Forecasts',
      desc: 'Live updates on rain, temperature, and humidity.',
      icon: 'assets/icons/weather.png'
    },
    {
      title: 'Market Prices',
      desc: 'Track daily price changes of crops across regions.',
      icon: 'assets/icons/market-price.png'
    },
    {
      title: 'Pest & Disease Info',
      desc: 'How to prevent & treat common crop diseases.',
      icon: 'assets/icons/pest-control.png'
    },
    {
      title: 'Govt. Schemes',
      desc: 'Find subsidy and loan programs by the government.',
      icon: 'assets/icons/government.png'
    },
    {
      title: 'Agri News',
      desc: 'Stay informed with recent news & innovations in agriculture.',
      icon: 'assets/icons/news.png'
    }
  ];
}
