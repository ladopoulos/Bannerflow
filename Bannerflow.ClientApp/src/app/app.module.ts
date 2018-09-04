import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMaterialModule } from './app.material.module';
import { BannerformComponent } from './bannerform/bannerform.component';
import { BannerlistComponent } from './bannerlist/bannerlist.component';
import { BannerService } from './services/banner.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerlistComponent,
    BannerformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    Routing
  ],
  providers: [BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
