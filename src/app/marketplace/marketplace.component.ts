import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  imports: [CommonModule],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css'
})
export class MarketplaceComponent {
  categories = [
    {
      name: 'Seeds',
      description: 'High-quality crop seeds for every season.',
      image: 'assets/icons/seeds.png'
    },
    {
      name: 'Fertilizers',
      description: 'Organic and chemical fertilizers for better yield.',
      image: 'assets/icons/fertilizers.png'
    },
    {
      name: 'Equipment',
      description: 'Tools & accessories for daily farming needs.',
      image: 'assets/icons/tools.png'
    },
    {
      name: 'Machinery',
      description: 'Tractors, sprayers, and harvesters at your doorstep.',
      image: 'assets/icons/machinery.png'
    },
    {
      name: 'Saplings',
      description: 'Healthy saplings for sustainable cultivation.',
      image: 'assets/icons/saplings.png'
    },
    {
      name: 'Agri Packages',
      description: 'Combo kits with all essentials in one box.',
      image: 'assets/icons/package.png'
    }
  ];
}
