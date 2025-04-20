import { Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { CropGuidesComponent } from './crop-guides/crop-guides.component';
import { CommunityComponent } from './community/community.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { InformationComponent } from './information/information.component';

export const routes: Routes = [
    {path: 'blogs', component: BlogsComponent},
    {path: '' , component: HomeComponent},
    {path: 'guides', component: CropGuidesComponent},
    {path: 'community', component: CommunityComponent},
    {path: 'marketplace', component: MarketplaceComponent},
    {path: 'info', component: InformationComponent},
];
