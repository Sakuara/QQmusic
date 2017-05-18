import { RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { MyMusicComponent } from "app/my-music/my-music.component";

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
    }
]