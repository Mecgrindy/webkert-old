import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { OnHoverDirective } from './directives/on-hover.directive';
import { MovieComponent } from './movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './nav/nav.component';
import { MatRippleModule } from '@angular/material/core';
import { FavoriteComponent } from './favorite/favorite.component';
import { GameComponent } from './game/game.component';
import { OnHoverTwoDirective } from './directives/on-hover-two.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplashScreenComponent,
    OnHoverDirective,
    OnHoverTwoDirective,
    MovieComponent,
    NavComponent,
    FavoriteComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
