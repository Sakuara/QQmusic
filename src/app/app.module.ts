import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRouter } from './app.routes';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { MyMusicComponent } from './my-music/my-music.component';
import { HomeComponent } from "app/home/home.component";
import { SingerComponent } from './singer/singer.component';
import { AlbumComponent } from './album/album.component';
import { RankingComponent } from './ranking/ranking.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { MvComponent } from './mv/mv.component';

@NgModule({
  declarations: [
    AppComponent, 
    MyMusicComponent,
    HomeComponent,
    SingerComponent,
    AlbumComponent,
    RankingComponent,
    PlaylistComponent,
    MvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
