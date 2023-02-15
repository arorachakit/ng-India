import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { FeatureComponent } from './components/feature/feature.component';
import { PageComponent } from './components/page/page.component';
import { TeaserComponent } from './components/teaser/teaser.component';
import { StoryblokDirective } from './directives/storyblok.directive';
import { DynamicModule } from 'ng-dynamic-component';
import { StoryblokService } from './services/storyblok.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    FeatureComponent,
    PageComponent,
    TeaserComponent,
    StoryblokDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicModule
  ],
  providers: [StoryblokService],
  bootstrap: [AppComponent]
})
export class AppModule { }
