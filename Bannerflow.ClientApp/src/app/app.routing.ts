import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BannerlistComponent } from './bannerlist/bannerlist.component';
import { BannerformComponent } from './bannerform/bannerform.component';
const appRoutes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: BannerlistComponent
}, {
  path: 'bannerform',
    component: BannerformComponent
}];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);  
