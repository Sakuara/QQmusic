import { RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";


export const homeRoutes = [
    {
        path:'',
        component:HomeComponent,
        children:[{
            path:'',
            component:HomeComponent
        }]
    }
];