import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogs',
  imports: [RouterModule,CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  blogPosts = [
    {
      title: 'Empowering Farmers with Technology',
      date: 'April 10, 2025',
      readTime: '3 min read',
      excerpt: 'Discover how modern technology is transforming agriculture and empowering farmers worldwide.',
      image: 'blog1.jpg',
      slug: 'empowering-farmers-with-technology'
    },
    {
      title: 'Sustainable Farming Practices',
      date: 'March 28, 2025',
      readTime: '4 min read',
      excerpt: 'Learn about sustainable farming methods that are both eco-friendly and economically viable.',
      image: 'blog3.png',
      slug: 'sustainable-farming-practices'
    },
    {
      title: 'Innovations in Agri-Tech',
      date: 'March 15, 2025',
      readTime: '5 min read',
      excerpt: 'Explore the latest innovations in agricultural technology and their impact on food production.',
      image: 'blog2.jpeg',
      slug: 'innovations-in-agri-tech'
    },
    {
      title: 'Innovations in Agri-Tech',
      date: 'March 15, 2025',
      readTime: '5 min read',
      excerpt: 'Explore the latest innovations in agricultural technology and their impact on food production.',
      image: 'blog4.JPG',
      slug: 'innovations-in-agri-tech'
    },
    {
      title: 'Innovations in Agri-Tech',
      date: 'March 15, 2025',
      readTime: '5 min read',
      excerpt: 'Explore the latest innovations in agricultural technology and their impact on food production.',
      image: 'blog5.jpg',
      slug: 'innovations-in-agri-tech'
    },
    {
      title: 'Innovations in Agri-Tech',
      date: 'March 15, 2025',
      readTime: '5 min read',
      excerpt: 'Explore the latest innovations in agricultural technology and their impact on food production.',
      image: 'blog6.jpeg',
      slug: 'innovations-in-agri-tech'
    }
  ];
  

}
