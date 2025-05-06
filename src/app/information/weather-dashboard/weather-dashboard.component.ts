import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../../services/weather.service';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-weather-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, NavbarComponent],
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit, OnDestroy {

  city: string = 'Dhaka';
  weatherData: any;
  isLoading: boolean = false;
  isError: boolean = false;
  private intervalId: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeather();
    this.autoRefresh();
  }

  fetchWeather() {
    this.isLoading = true;
    this.isError = false;
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching weather:', error);
        this.isLoading = false;
        this.isError = true;
      }
    });
  }

  onCitySearch() {
    this.fetchWeather();
  }

  autoRefresh() {
    this.intervalId = setInterval(() => {
      this.fetchWeather();
    }, 10 * 60 * 1000); // প্রতি ১০ মিনিটে
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
