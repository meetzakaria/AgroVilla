import { Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { CropGuidesComponent } from './crop-guides/crop-guides.component';
import { CommunityComponent } from './community/community.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { InformationComponent } from './information/information.component';
import { SeedsComponent } from './marketplace/seeds/seeds.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { WeatherDashboardComponent } from './information/weather-dashboard/weather-dashboard.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { AddProductComponent } from './seller-dashboard/add-product/add-product.component';
import { ProductListComponent } from './seller-dashboard/product-list/product-list.component';
import { EquipmentComponent } from './marketplace/equipment/equipment.component';
import { FertilizerComponent } from './marketplace/fertilizer/fertilizer.component';
import { AdminDashboardComponent } from './admins/admin-dashboard/admin-dashboard.component';
import { PendingApprovalComponent } from './admins/pending-approval/pending-approval.component';
import { UserlistComponent } from './admins/userlist/userlist.component';
import { authGuard } from './core/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PaymentComponent } from './pages/payment/payment.component';


export const routes: Routes = [
    { path: 'blogs', component: BlogsComponent },
    { path: '', component: HomeComponent },
    { path: 'guides', component: CropGuidesComponent },
    { path: 'community', component: CommunityComponent },
    { path: 'marketplace', component: MarketplaceComponent },
    { path: 'info', component: InformationComponent },
    { path: 'seeds', component: SeedsComponent },
    { path: 'cart', component: MyCartComponent },
    { path: 'weather', component: WeatherDashboardComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'seller', component: SellerDashboardComponent,
        data: { roles: ['seller'] },
        canActivate: [authGuard]
    },
    { path: 'ap', component: AddProductComponent,
        data: { roles: ['admin', 'seller'] },
                canActivate: [authGuard]
     },
    { path: 'pl', component: ProductListComponent },
    { path: 'equipment', component: EquipmentComponent },
    { path: 'fertilizer', component: FertilizerComponent },
    {
        path: 'admin', component: AdminDashboardComponent,
        data: { roles: ['admin'] },
        canActivate: [authGuard]
    },

    { path: 'pendingapproval', component: PendingApprovalComponent },
    { path: 'userlist', component: UserlistComponent },

    { path: 'user', component: UserProfileComponent },
    { path: 'payment', component: PaymentComponent },

];
