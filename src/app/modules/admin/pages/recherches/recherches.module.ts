
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DevExtremeModule } from 'devextreme-angular';
import { RecherchesComponent } from './recherches.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';

const RecherchesRoutes: Route[] = [
    {
        path : '',component: RecherchesComponent
    }
];

@NgModule({
    declarations: [
        RecherchesComponent,
   
       
    ],
    imports     : [
        RouterModule.forChild(RecherchesRoutes),
        DevExtremeModule,
        CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatMenuModule,
       
    ]
})
export class RecherchesModule
{
}
