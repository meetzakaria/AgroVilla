import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-marketplace',
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css'
})
export class MarketplaceComponent {
  categories = [
    {
      name: 'Seeds',
      description: 'High-quality crop seeds for every season.',
      image: 'marketplace/seeds.jpg',
      path:'/seeds'
    },
    
    {
      name: 'Fertilizers',
      description: 'Organic and chemical fertilizers for better yield.',
      image: 'marketplace/fertilizer.jpg',
      path:'/fertilizers'
    },
    {
      name: 'Equipment',
      description: 'Tools & accessories for daily farming needs.',
      image: 'marketplace/equipment.jpg',
      path:'seed'
    },
    {
      name: 'Machinery',
      description: 'Tractors, sprayers, and harvesters at your doorstep.',
      image: 'marketplace/machinery.jpg',
      path:'seed'
    },
    {
      name: 'Saplings',
      description: 'Healthy saplings for sustainable cultivation.',
      image: 'marketplace/saplings.jpg',
      path:'seed'
    },
    {
      name: 'Agri Packages',
      description: 'Combo kits with all essentials in one box.',
      image: 'marketplace/toolskit.png',
      path:'seed'
    }
  ];
}
