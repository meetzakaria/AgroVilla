import { Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { CropGuidesComponent } from './crop-guides/crop-guides.component';
import { CommunityComponent } from './community/community.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { InformationComponent } from './information/information.component';
import { SeedsComponent } from './marketplace/seeds/seeds.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WeatherDashboardComponent } from './information/weather-dashboard/weather-dashboard.component';

export const routes: Routes = [
    {path: 'blogs', component: BlogsComponent},
    {path: '' , component: HomeComponent},
    {path: 'guides', component: CropGuidesComponent},
    {path: 'community', component: CommunityComponent},
    {path: 'marketplace', component: MarketplaceComponent},
    {path: 'info', component: InformationComponent},
    {path: 'seeds', component: SeedsComponent},
    {path: 'cart', component: MyCartComponent},
    {path: 'plist', component: ProductListComponent},
    {path: 'weather', component: WeatherDashboardComponent}
];
