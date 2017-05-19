import { RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { MyMusicComponent } from "app/my-music/my-music.component";
import { SingerComponent } from "app/singer/singer.component";
import { AlbumComponent } from "app/album/album.component";
import { RankingComponent } from "app/ranking/ranking.component";
import { PlaylistComponent } from "app/playlist/playlist.component";
import { MvComponent } from "app/mv/mv.component";

export const appRouter = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },{
        path:'home',
        component: HomeComponent
    },{
        path:'local',
        component: MyMusicComponent
    },{
        path:'index',
        component:HomeComponent
    },{
        path:'singer',
        component:SingerComponent
    },{
        path:'album',
        component:AlbumComponent
    },{
        path:'ranking',
        component:RankingComponent
    },{
        path:'playlist',
        component:PlaylistComponent
    },{
        path:'mv',
        component:MvComponent
    }
]